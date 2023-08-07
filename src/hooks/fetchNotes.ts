import { ThunkAction } from 'redux-thunk';
import { RootState, AppDispatch } from '../redux/store';
import { setNotes } from '../redux/reducers/notesSlice';
import { notes } from '../data/notes';
import { AnyAction } from '@reduxjs/toolkit';

export const fetchNotes = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setNotes(notes));
        } catch (error) {
            console.error('Error reading data:', error);
        }
    };
};