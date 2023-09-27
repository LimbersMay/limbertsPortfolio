import {LanguageFormat} from "../../languages";
import {usePreferencesStore} from "../../hooks";

export const MultilingualText = ({ tid }: { tid: keyof LanguageFormat}) => {
    const { dictionary } = usePreferencesStore();

    return dictionary[tid] || tid;
}
