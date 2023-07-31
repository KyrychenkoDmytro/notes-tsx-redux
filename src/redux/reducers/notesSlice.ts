import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Note {
    id: number;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
    imgUrl: string;
    archived: boolean;
}

interface NotesSliceState {
    data: Note[];
}

const initialState: NotesSliceState = {
    data: []
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.data = action.payload;
        },
    }
})

export const { setNotes } = notesSlice.actions;

export default notesSlice.reducer;