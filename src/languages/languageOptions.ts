import {en, es } from "./";

/*
    This file is used to export all the languages that are available in the application.
 */

export interface Dictionary {
    EN: typeof en;
    ES: typeof es;
}

export const dictionaryList: Dictionary = {
    EN: en,
    ES: es
};
