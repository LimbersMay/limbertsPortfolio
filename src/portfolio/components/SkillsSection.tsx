import {SkillsGroup, Text} from "./";
import {SkillGroup} from "../interfaces/skillGroup.ts";

interface Props {
    skillGroups: SkillGroup[];
}

export const SkillsSection = ({ skillGroups }: Props) => {
    return (
        <>
            {/* Skills section */}
            <div id="skills" className="flex flex-col gap-5">

                <h1 className="text-3xl font-bold text-slate-900">
                    <Text tid="skillsTitle"/>
                </h1>

                {
                    skillGroups.map(({skills, title}) => (
                        <SkillsGroup key={title} skills={skills} title={title}/>
                    ))
                }
            </div>
        </>
    )
}