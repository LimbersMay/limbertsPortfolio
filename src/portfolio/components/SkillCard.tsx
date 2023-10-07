import {Skill} from "../interfaces";
import {usePreferencesStore} from "../../hooks";

interface Props extends Skill{
    name: string;
    alt?: string;
}

export const SkillCard = ({name, level, imageURL, alt}: Props) => {

    const { language } = usePreferencesStore();

    return (
        <div
            className="flex flex-col items-center gap-2 rounded border border-solid border-gray-200 bg-gray-100 p-5 shadow-xl">
            <img src={imageURL} alt={alt} className="h-24 w-24"/>
            <span className="text-sm font-bold text-slate-900">{name.toUpperCase()}</span>
            <span className="text-xs text-slate-900">
                {/* Check the user language preferences */}
                {
                    level[language]?.toUpperCase() || level.EN
                }
            </span>
        </div>
    )
}
