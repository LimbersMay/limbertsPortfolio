import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";
import {Dictionary, dictionaryList, LanguageFormat} from "../../languages";

interface PreferencesState {
    language: keyof Dictionary;
    dictionary: LanguageFormat;
}

const initialState: PreferencesState = {
    language: 'ES',
    dictionary: dictionaryList['ES']
}

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<keyof Dictionary>) => {
            state.language = action.payload
        },
        setDictionary: (state, action: PayloadAction<LanguageFormat>) => {
            state.dictionary = action.payload
        }
    }
});

export const {setLanguage, setDictionary} = preferencesSlice.actions;
export const selectPreferences = (state: RootState) => state.preferences;