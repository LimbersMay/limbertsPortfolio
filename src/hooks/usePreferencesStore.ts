import {selectPreferences, useAppDispatch, useAppSelector, setDictionary, setLanguage} from "../store";
import {Dictionary, dictionaryList} from "../languages";

export const usePreferencesStore = () => {

    const dispatch = useAppDispatch();
    const { language, dictionary } = useAppSelector(selectPreferences);

    const loadLanguage = () => {
        const language = localStorage.getItem("language");

        // 1. If there is no language in localStorage, we set the default language to localStorage
        if (!language) {
            localStorage.setItem("language", "ES");
            return;
        }

        // 2. If the language is not in the dictionary, we set the default language
        if (!(language in dictionaryList)) {
            localStorage.setItem("language", "ES");
            return;
        }

        dispatch(setLanguage(language as keyof Dictionary));
        dispatch(setDictionary(dictionaryList[language as keyof Dictionary]));
    }

    const changeLanguage = (language: keyof Dictionary) => {
        dispatch(setLanguage(language));
        dispatch(setDictionary(dictionaryList[language]));
    }

    return {
        // Properties
        language,
        dictionary,

        // Methods
        loadLanguage,
        changeLanguage
    }
}
