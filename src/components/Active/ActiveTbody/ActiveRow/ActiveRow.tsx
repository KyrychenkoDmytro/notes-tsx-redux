import { FC } from "react";
import { Note } from "../../../../types/interfaces";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { deleteOneNote, archiveOneNote, editOneNote, toggleFormState } from "../../../../redux/reducers/notesSlice";

const ActiveRow: FC<Note> = (props) => {
    const { id, name, imgUrl, created, category, content, dates } = props;
    const dispatch = useAppDispatch();

    const editHandler = () => {
        dispatch(editOneNote(id));
        dispatch(deleteOneNote(id));
        dispatch(toggleFormState())
    }

    return (
        <tr className="ActiveNotesTable__body-row createdNote" data-note-id={id}>
            <td>
                <div className="ActiveNotesTable__body-name">
                    <div><img src={imgUrl} alt={category} /></div>
                    <span>{name}</span>
                </div>
            </td>
            <td>{created}</td>
            <td>{category}</td>
            <td>{content}</td>
            <td>{dates}</td>
            <td>
                <div className="ActiveNotesTable__body-wrapper-icons">
                    <button
                        className="ActiveNotesTable__body-icons-edit"
                        id="editNote"
                        onClick={editHandler}
                    >
                        <img src="./assets/icons/edit.svg" alt="edit" />
                    </button>
                    <button
                        onClick={() => dispatch(archiveOneNote(id))}
                        className="ActiveNotesTable__body-icons-archive"
                        id="archiveNote"
                    >
                        <img src="./assets/icons/archive.svg" alt="archive" />
                    </button>
                    <button
                        onClick={() => dispatch(deleteOneNote(id))}
                        className="ActiveNotesTable__body-icons-delete"
                        id="deleteNote"
                    >
                        <img src="./assets/icons/delete.svg" alt="delete" />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ActiveRow;