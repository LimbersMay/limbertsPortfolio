import {Text} from "./Text.tsx";
import {ProjectCard} from "./";
import {Project} from "../interfaces";

interface Props {
    projects: Project[];
}

export const ProjectsSection = ({ projects }: Props) => {
    return (
        <div id="projects" className="mt-5 flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-slate-900">
                <Text tid="projectsTitle"/>
            </h1>

            <p className="text-slate-600">
                <Text tid="projectsDescription"/>
            </p>

            { /* Project cards*/}
            <div className="flex flex-col gap-3">
                {
                    projects.map(project => (
                        <ProjectCard project={project} key={project.title}/>
                    ))
                }
            </div>
        </div>
    )
}