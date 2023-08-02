import { setNotes } from '../redux/reducers/notesSlice';
import { notes } from '../data/notes';

export const fetchNotes = () => (dispatch: any) => {
    try {
        dispatch(setNotes(notes));
    } catch (error) {
        console.error('Error reading data:', error);
    }
};