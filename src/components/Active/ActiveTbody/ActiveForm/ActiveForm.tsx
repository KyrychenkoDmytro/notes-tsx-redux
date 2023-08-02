import { useAppSelector, useAppDispatch } from "../../../../hooks/reduxHooks";
import { createOneNote, toggleFormState, editOneNote } from "../../../../redux/reducers/notesSlice";
import { useState, useEffect } from 'react';
import { images } from "../../../../data/images";

const ActiveForm = () => {
    const { isActiveForm, nextId, editableNote } = useAppSelector(state => state.notes);
    const [name, setName] = useState(editableNote?.name || '');
    const [date, setDate] = useState(editableNote?.created || '');
    // const [dates, setDates] = useState(editableNote?.dates || ['']);
    const [category, setCategory] = useState(editableNote?.category || 'Task');
    const [content, setContent] = useState(editableNote?.content || '');
    const dispatch = useAppDispatch();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleFormClose = () => {
        if (editableNote) {
            dispatch(createOneNote(editableNote));
        }
        dispatch(toggleFormState());
        dispatch(editOneNote(Infinity));
        setName('');
        setDate('');
        setCategory('Task');
        setContent('');
    }

    // console.log(dates);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newNote = {
            id: editableNote ? editableNote.id : nextId,
            imgUrl: images.filter((img) => img.imgName === category)[0]?.imgUrl || '',
            name,
            created: formatDate(date),
            category,
            content,
            dates: editableNote ? editableNote.dates : '',
            archived: false,
        };

        dispatch(createOneNote(newNote));
        dispatch(toggleFormState());
        dispatch(editOneNote(Infinity));
        setName('');
        setDate('');
        setCategory('Task');
        setContent('');
    };

    useEffect(() => {
        if (editableNote) {
            setName(editableNote.name);
            setDate(formatDate(editableNote.created));
            setCategory(editableNote.category);
            setContent(editableNote.content);
            // let datesArray = editableNote.dates.split(', ');
            // let newDatesFormat: string[] = [];
            // if(datesArray.length > 0) {
            //     newDatesFormat = datesArray.map(item=> formatDate(item))
            // }
            // setDates([...newDatesFormat, formatDate(editableNote.created)]);
        }
    }, [editableNote]);

    return (
        <>
            {isActiveForm && (
                <tr className="ActiveNotesTable__body-row notes-form">
                    <td className="ActiveNotesTable__body-form" colSpan={6}>
                        <form id="noteForm" onSubmit={handleFormSubmit}>
                            <input
                                className="ActiveNotesTable__body-form-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                required
                            />
                            <input
                                className="ActiveNotesTable__body-form-date"
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                            <select
                                className="ActiveNotesTable__body-form-category"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}>
                                <option value="Task">Task</option>
                                <option value="Random Thought">Random Thought</option>
                                <option value="Idea">Idea</option>
                            </select>
                            <textarea
                                className="ActiveNotesTable__body-form-text"
                                name="Content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                maxLength={100}
                                cols={30}
                                rows={2}
                                placeholder="Content"
                                required
                            />
                            <button className="ActiveNotesTable__body-form-submit" id="submitNote" type="submit">Add Note</button>
                            <button onClick={handleFormClose} className="ActiveNotesTable__body-form-close" id="closeForm">x</button>
                        </form>
                    </td>
                </tr>
            )}
        </>
    )
}
export default ActiveForm;