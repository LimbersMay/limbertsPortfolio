import {Text, SkillCard} from "./"
import {SkillGroup} from "../interfaces";

export const SkillsGroup = ({ skills, title }: SkillGroup) => {
    return (
        <>
            <h2 className="text-xl font-bold text-sky-800">
                <Text tid={title}/>
            </h2>

            <div className="mb-10 grid grid-cols-2 md:grid-cols-4 gap-5">
                {
                    skills.map(({name, level, imageURL}) => (
                        <SkillCard key={name} name={name} level={level} imageURL={imageURL} alt={name}/>
                    ))
                }
            </div>
        </>
    )
}