import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Language {
    code: string;
    name: string;
}

export interface TranslateState {
    language: Language[];
}

const initialState: TranslateState = {
    language: []
}

export const translateSlice = createSlice(
    {
        name: "translate",
        initialState,
        reducers: {
            getLanguages: (state: TranslateState, action: PayloadAction<Language[]>) => {
                state.language = action.payload
            },
            

        }
    }
)

export const { getLanguages } = translateSlice.actions

export default translateSlice.reducer