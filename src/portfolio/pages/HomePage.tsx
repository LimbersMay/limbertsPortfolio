import {AboutCard, Header, ProjectsSection} from "../components";
import {Project} from "../interfaces";

const projects: Project[] = [
    {
        title: "Webnotes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet atque aut fugit iusto libero",
        imageURL: "https://picsum.photos/200/300",
        linkToProject: "https://www.google.com",
        technologies: ["HTML5", "CSS3", "JavaScript", "Node", "MongoDB"]
    },
    {
        title: "EasyQrAttendance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet atque aut fugit iusto libero",
        imageURL: "https://picsum.photos/200/300",
        linkToProject: "",
        technologies: ["React", "TypeScript", "Node", "Express", "Redux", "Mysql"]
    },
]

export const HomePage = () => {

    return (
        <div className="container mx-auto flex flex-col gap-10 p-5 pt-2 xl:pt-50 xl:pr-60 xl:pl-60">

            <Header />

            {/* About and  self photo*/}
            <AboutCard />

            <hr/>

            {/* Projects section */}
            <ProjectsSection projects={projects} />

        </div>
    )
}
