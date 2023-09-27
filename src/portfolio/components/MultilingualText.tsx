import {LanguageFormat} from "../../languages";
import {useLanguage} from "../../hooks";

export const MultilingualText = ({ tid }: { tid: keyof LanguageFormat}) => {
    const { dictionary } = useLanguage();

    return dictionary[tid] || tid;
}
