export let notes = [
    {
        id: 1,
        imgUrl: './assets/icons/task.svg',
        name: 'Shopping List',
        created: 'April 20, 2021',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: null,
        archived: false,
    },
    {
        id: 2,
        imgUrl: './assets/icons/thought.svg',
        name: 'The theory of evolut...',
        created: 'April 27, 2021',
        category: 'Random Thought',
        content: 'The evolution...',
        dates: null,
        archived: false,
    },
    {
        id: 3,
        imgUrl: './assets/icons/idea.svg',
        name: 'New Feature',
        created: 'May 05, 2021',
        category: 'Idea',
        content: 'Implement new...',
        dates: ['3/5/2021', '5/5/2021'],
        archived: false,
    },
    {
        id: 4,
        imgUrl: './assets/icons/idea.svg',
        name: 'William Gaddis',
        created: 'May 07, 2021',
        category: 'Idea',
        content: 'Power does not co...',
        dates: null,
        archived: false,
    },
    {
        id: 5,
        imgUrl: './assets/icons/task.svg',
        name: 'Books',
        created: 'May 15, 2021',
        category: 'Task',
        content: 'The Lean Startup',
        dates: null,
        archived: false,
    },
    {
        id: 6,
        imgUrl: './assets/icons/task.svg',
        name: 'Learn javascript',
        created: 'April 12, 2021',
        category: 'Task',
        content: 'Event loop is',
        dates: null,
        archived: true,
    },
    {
        id: 7,
        imgUrl: './assets/icons/thought.svg',
        name: 'React or Angular?',
        created: 'April 15, 2021',
        category: 'Random Thought',
        content: 'Library or framework',
        dates: ['3/5/2021'],
        archived: true,
    }
];

export const getNotes = () => notes;
export const findOneNote = (findId) => notes.find((note) => Number(note.id) === Number(findId));
export const addNewNote = (newNote) => (notes = [...notes, newNote]);
export const updateOneNote = (editId, newNote) => {
    console.log(notes);
    removeOneNote(editId);
    console.log(notes);
    addNewNote(newNote);
    console.log(notes);
};
export const removeOneNote = (id) => (notes = [...notes.filter((note) => Number(note.id) !== Number(id))]);
export const archiveOneNote = (id) => {
    const note = notes.find((note) => Number(note.id) === Number(id));
    if (note) {
        note.archived = true;
    }
};
export const unarchiveOneNote = (id) => {
    const note = notes.find((note) => Number(note.id) === Number(id));
    if (note) {
        note.archived = false;
    }
};
export const archiveAllNotes = () => notes.map((note) => (note.archived = true));
export const deleteAllNotes = () => (notes = []);
export const findObjectsWithCategoryAndArchived = (category) => notes.filter(note => note.category === category && note.archived === true);