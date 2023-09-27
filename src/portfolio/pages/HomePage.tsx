import {MultilingualText} from "../components/MultilingualText.tsx";
import {useEffect} from "react";
import {usePreferencesStore} from "../../hooks";

export const HomePage = () => {

    const { loadLanguage } = usePreferencesStore();

    // Load the user preferences
    useEffect(() => {
        loadLanguage();
    });

    return (
        <div>
            <MultilingualText tid={"title"}/>
        </div>
    )
}
