import {en, es } from "./";

export interface Dictionary {
    EN: typeof en;
    ES: typeof es;
}

export const dictionaryList: Dictionary = {
    EN: en,
    ES: es
};
