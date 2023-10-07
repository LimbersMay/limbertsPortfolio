import {Skill} from "./skill.ts";
import {LanguageFormat} from "../../languages";

export interface SkillGroup {
    title: keyof LanguageFormat
    skills: Skill[],
}
