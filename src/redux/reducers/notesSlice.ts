import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NumberOfNotesByCategory } from '../../types/interfaces';

const getActiveNotes = (state: NotesSliceState) => {
    state.activeNotes = state.data.filter(item => !item.archived);
};

const calcCategoryCounts = (state:NotesSliceState) => {
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

interface NotesSliceState {
    data: Note[];
    activeNotes: Note[];
    categoryCounts: NumberOfNotesByCategory;
}

const initialState: NotesSliceState = {
    data: [],
    activeNotes: [],
    categoryCounts: {},
}

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.data = action.payload;

            getActiveNotes(state);
            calcCategoryCounts(state);
        },
    }
})

export const { setNotes } = notesSlice.actions;

export default notesSlice.reducer;