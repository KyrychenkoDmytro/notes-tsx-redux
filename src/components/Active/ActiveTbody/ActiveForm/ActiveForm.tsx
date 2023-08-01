import { useAppSelector, useAppDispatch } from "../../../../hooks/reduxHooks";
import { createOneNote, toggleFormState } from "../../../../redux/reducers/notesSlice";
import { useState } from 'react';
import { images } from "../../../../data/images";

const ActiveForm = () => {
    const { isActiveForm, nextId } = useAppSelector(state => state.notes);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('Task');
    const [content, setContent] = useState('');
    const dispatch = useAppDispatch();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newNote = {
            id: nextId,
            imgUrl: images.filter((img) => img.imgName === category)[0]?.imgUrl || '',
            name,
            created: formatDate(date),
            category,
            content,
            dates: '',
            archived: false,
        };

        dispatch(createOneNote(newNote));
        dispatch(toggleFormState());
        setName('');
        setDate('');
        setCategory('Task');
        setContent('');
    };

    const handleFormClose = () => {
        dispatch(toggleFormState());
        setName('');
        setDate('');
        setCategory('Task');
        setContent('');
    }

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
    );




    // return (
    // note
    //     ? `<tr class="ActiveNotesTable__body-row notes-form">
    //       <td class="ActiveNotesTable__body-form" colspan="6">
    //           <form id="noteForm">
    //               <input class="ActiveNotesTable__body-form-name" type="text" value="${note?.name}" placeholder="Name" required>
    //               <input class="ActiveNotesTable__body-form-date" type="date" value="${formatDate(note?.created)}" required>
    //               <select class="ActiveNotesTable__body-form-category" name="category">
    //                   <option value="Task" ${note?.category === "Task" ? "selected" : ""}>Task</option>
    //                   <option value="Random Thought" ${note?.category === "Random Thought" ? "selected" : ""}>Random Thought</option>
    //                   <option value="Idea" ${note?.category === "Idea" ? "selected" : ""}>Idea</option>
    //               </select>
    //               <textarea class="ActiveNotesTable__body-form-text" name="Content" maxlength="100" cols="30" rows="2" placeholder="Content" required>${note?.content}</textarea>
    //               <button class="ActiveNotesTable__body-form-submit" id="submitNote" type="submit">Add Note</button>
    //               <button class="ActiveNotesTable__body-form-close" id="closeForm">x</button>
    //           </form>
    //       </td>
    //   </tr>`
    //     : `<tr class="ActiveNotesTable__body-row notes-form">
    //       <td class="ActiveNotesTable__body-form" colspan="6">
    //           <form id="noteForm">
    //               <input class="ActiveNotesTable__body-form-name" type="text" value="" placeholder="Name" required>
    //               <input class="ActiveNotesTable__body-form-date" type="date" required>
    //               <select class="ActiveNotesTable__body-form-category" name="category">
    //                   <option value="Task">Task</option>
    //                   <option value="Random Thought">Random Thought</option>
    //                   <option value="Idea">Idea</option>
    //               </select>
    //               <textarea class="ActiveNotesTable__body-form-text" name="Content" maxlength="100" cols="30" rows="2" placeholder="Content" required></textarea>
    //               <button class="ActiveNotesTable__body-form-submit" id="submitNote" type="submit">Add Note</button>
    //               <button class="ActiveNotesTable__body-form-close" id="closeForm">x</button>
    //           </form>
    //       </td>
    //   </tr>`
    // );
};

export default ActiveForm;
