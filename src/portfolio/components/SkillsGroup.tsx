import {Text, SkillCard} from "./"
import {SkillGroup} from "../interfaces/skillGroup.ts";

export const SkillsGroup = ({ skills, title }: SkillGroup) => {
    return (
        <>
            <h2 className="text-xl font-bold text-sky-800">
                <Text tid={title}/>
            </h2>

            <div className="mb-10 flex flex-row flex-wrap gap-5 justify-stretch">
                {
                    skills.map(({name, level, imageURL}) => (
                        <SkillCard key={name} name={name} level={level} imageURL={imageURL} alt={name}/>
                    ))
                }
            </div>
        </>
    )
}