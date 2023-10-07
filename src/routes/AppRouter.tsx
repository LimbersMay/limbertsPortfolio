import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../portfolio/pages";
import {usePreferencesStore} from "../hooks";

export const AppRouter = () => {

    // Load the language from the local storage
    const {loadLanguage} = usePreferencesStore();

    // Load the user preferences
    useEffect(() => {
        loadLanguage();
    });

    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
        </Routes>
    )
}
