import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NumberOfNotesByCategory } from '../../types/interfaces';

const getActiveNotes = (state: NotesSliceState) => {
    state.activeNotes = state.data.filter(item => !item.archived);
};

const calcCategoryCounts = (state: NotesSliceState) => {
    const categoryCounts: NumberOfNotesByCategory = {};

    state.data.forEach(note => {
        const { category, archived, imgUrl } = note;
        if (!categoryCounts[category]) {
            categoryCounts[category] = { total: 0, archived: 0, imgUrl };
        }
        categoryCounts[category].total++;
        if (archived) {
            categoryCounts[category].archived++;
        }
    });

    state.categoryCounts = categoryCounts;
}

const findNextId = (state: NotesSliceState) => {
    state.nextId = state.data.reduce((accum, item) => (accum < item.id ? (accum = item.id) : accum) + 1, 0)
}

interface NotesSliceState {
    data: Note[];
    activeNotes: Note[];
    categoryCounts: NumberOfNotesByCategory;
    isActiveForm: boolean;
    nextId: number;
}

const initialState: NotesSliceState = {
    data: [],
    activeNotes: [],
    categoryCounts: {},
    isActiveForm: false,
    nextId: 0
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.data = action.payload;

            getActiveNotes(state);
            calcCategoryCounts(state);
            findNextId(state);
        },
        deleteAllNotes: (state) => {
            state.data = [];

            getActiveNotes(state);
            calcCategoryCounts(state);
            findNextId(state);
        },
        archiveAllNotes: (state) => {
            state.data = state.data.map((note) => {
                note.archived = true;
                return note;
            });

            getActiveNotes(state);
            calcCategoryCounts(state);
        },
        createOneNote: (state, action: PayloadAction<Note>) => {
            state.data = [...state.data, action.payload];

            getActiveNotes(state);
            calcCategoryCounts(state);
            findNextId(state);
        },
        deleteOneNote: (state, action: PayloadAction<number>) => {
            state.data = [...state.data.filter((note) => note.id !== action.payload)];

            getActiveNotes(state);
            calcCategoryCounts(state);
            findNextId(state);
        },
        archiveOneNote: (state, action: PayloadAction<number>) => {
            const note = state.data.find((note) => note.id === action.payload);
            if (note) {
                note.archived = true;
                state.data = [...state.data];
            }

            getActiveNotes(state);
            calcCategoryCounts(state);
        },
        toggleFormState: (state) => {
            state.isActiveForm = !state.isActiveForm;
        }
    }
})

export const { setNotes, deleteAllNotes, archiveAllNotes, createOneNote, deleteOneNote, archiveOneNote, toggleFormState } = notesSlice.actions;

export default notesSlice.reducer;