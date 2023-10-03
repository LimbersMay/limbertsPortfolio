interface Props {
    title: string;
    level: string;
    imageURL: string;
    alt?: string;
}

export const SkillCard = ({ title, level, imageURL, alt }: Props) => {
    return (
        <div className="flex flex-col items-center gap-2 rounded border border-solid border-gray-200 bg-gray-100 p-5 shadow-xl">
            <img src={ imageURL } alt={ alt } className="h-24 w-24"/>
            <span className="text-sm font-bold text-slate-900">{ title.toUpperCase()}</span>
            <span className="text-xs text-slate-900">{ level.toUpperCase() }</span>
        </div>
    )
}
