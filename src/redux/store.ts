import { AnyAction, configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducers/notesSlice";
import { ThunkDispatch } from 'redux-thunk';

export const store = configureStore({
    reducer : {
        notes: notesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;