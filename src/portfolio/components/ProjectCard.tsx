import {Text} from "./";
import {Project} from "../interfaces";
import {usePreferencesStore} from "../../hooks";

interface Props {
    project: Project;
}

export const ProjectCard = ({ project }: Props) => {

    const { language } = usePreferencesStore();

    return (
        <div className="flex flex-col justify-between gap-10 border border-solid border-gray-300 bg-gray-100 p-5 sm:flex-row sm:gap-0">
            { /* Project information */}
            <div className="flex flex-col gap-5">
                <h2 className="text-xl font-bold">
                    { project.title }
                </h2>

                <p>
                    {
                        project.description[language] || project.description.EN
                    }
                </p>

                { /* Project technologies */}
                <div className="flex flex-row flex-wrap gap-5">
                    {
                        project.technologies.map(technology => (
                            <span key={technology} className="rounded bg-gray-200 px-2 py-1 text-slate-800">
                                { technology }
                            </span>
                        ))
                    }
                </div>

                { /* Project action buttons */}
                <div className="mt-5 flex flex-row gap-5">
                    <a
                        className={`
                            ${ project.isAvailableToPreview ? "bg-slate-800" : "pointer-events-none bg-slate-600 " }
                            flex flex-row items-center gap-2 rounded px-4 py-2 text-white hover:bg-slate-90
                        `}
                        href={ project.linkToProject }
                        target="_blank"
                        rel="noreferrer"
                    >
                        {
                            project.isAvailableToPreview ?
                                (<Text tid="projectCardViewProject" />) :
                                (<Text tid="projectCardViewNotAvailable" />)
                        }

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                        </svg>
                    </a>
                </div>
            </div>

            { /* Project image */}
            {/*<img src={ project1 } alt="Project 1" className="hidden sm:block sm:h-56 sm:w-60"/>*/}
        </div>
    )
}
