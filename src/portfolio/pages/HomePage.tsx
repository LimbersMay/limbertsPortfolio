import {AboutCard, ContactSection, Header, ProjectsSection, SkillsSection} from "../components";
import {Project, SkillGroup} from "../interfaces";

const projects: Project[] = [
    {
        title: "Retabs - Save & Restore your Tabs",
        description: {
            EN: "Retabs is a chrome extension that allows you to save your current tabs and restore them later. It saves your tabs in the localStorage of your browser and it also saves them in your chrome account",
            ES: "Retabs es una extensión de chrome que te permite guardar tus pestañas actuales y restaurarlas más tarde. Guarda tus pestañas en el localStorage de tu navegador y también las guarda en tu cuenta de chrome"
        },
        imageURL: "https://picsum.photos/200/300",
        linkToProject: "https://chrome.google.com/webstore/detail/retabs-save-restore-your/nehkibjcpghebkinbohilcpmdbkbhjdd",
        technologies: ["React", "JavaScript", "Redux"],
        isAvailableToPreview: true
    },
    {
        title: "Webnotes",
        description: {
            EN: "Webnotes is a web application that allows you to create notes and save them in your account. This was my first full stack project and I learned a lot from it",
            ES: "Webnotes es una aplicación web que te permite crear notas y guardarlas en tu cuenta. Este fue mi primer proyecto full stack en el que trabajé y aprendí mucho de él"
        },
        imageURL: "https://picsum.photos/200/300",
        linkToProject: "https://www.google.com",
        technologies: ["NodeJS", "Express", "MongoDB", "HTML5", "CSS3", "JavaScript"],
        isAvailableToPreview: false
    },
    {
        title: "EasyQrAttendance",
        description: {
            EN: "EasyQrAttendance is a web application that allows you to register your students' attendance using QR Codes. It allows you to create groups, QR Codes and download the attendance in an Excel file",
            ES: "EasyQrAttendance es una aplicación web que te permite registrar la asistencia de tus alumnos usando códigos QR. Te permite crear grupos, códigos QR y descargar las asistencias en un archivo de Excel"
        },
        imageURL: "https://picsum.photos/200/300",
        linkToProject: "",
        technologies: ["React", "TypeScript", "NodeJS", "Express", "Redux", "Mysql"],
        isAvailableToPreview: false
    }
]

const skillGroups: SkillGroup[] = [
    {
        title: "skillsBackendTitle",
        skills: [
            {
                name: "node js",
                level: {
                    EN: "advanced",
                    ES: "avanzado"
                },
                imageURL: "https://www.svgrepo.com/show/373929/node.svg",
            },
            {
                name: "express",
                level: {
                    EN: "advanced",
                    ES: "avanzado"
                },
                imageURL: "https://www.svgrepo.com/show/353724/express.svg",
            },
            {
                name: "typescript",
                level: {
                    EN: "intermediate",
                    ES: "intermedio"
                },
                imageURL: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
            },
            {
                name: "JavaScript",
                level: {
                    EN: "intermediate",
                    ES: "intermedio"
                },
                imageURL: "https://www.svgrepo.com/show/353925/javascript.svg",
            },
            {
                name: "MongoDB",
                level: {
                    EN: "intermediate",
                    ES: "intermedio"
                },
                imageURL: "https://www.svgrepo.com/show/373845/mongo.svg",
            },
            {
                name: "MySQL",
                level: {
                    EN: "intermediate",
                    ES: "intermedio"
                },
                imageURL: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
            },
            {
                name: "ASP.NET Core",
                level: {
                    EN: "beginner",
                    ES: "principiante"
                },
                imageURL: "https://www.svgrepo.com/show/376369/dotnet.svg",
            },
            {
                name: "Docker",
                level: {
                    EN: "beginner",
                    ES: "principiante"
                },
                imageURL: "https://www.svgrepo.com/show/373553/docker.svg",
            },
        ],
    },
    {
        title: "skillsFrontendTitle",
        skills: [
            {
                name: "react",
                level: {
                    EN: "advanced",
                    ES: "avanzado"
                },
                imageURL: "https://www.svgrepo.com/show/354259/react.svg",
            },
            {
                name: "typescript",
                level: {
                    EN: "intermediate",
                    ES: "intermedio"
                },
                imageURL: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
            },
            {
                name: "JavaScript",
                level: {
                    EN: "intermediate",
                    ES: "intermedio"
                },
                imageURL: "https://www.svgrepo.com/show/353925/javascript.svg",
            },
            {
                name: "redux",
                level: {
                    EN: "intermediate",
                    ES: "intermedio"
                },
                imageURL: "https://www.svgrepo.com/show/452093/redux.svg",
            },
            {
                name: "Vite",
                level: {
                    EN: "beginner",
                    ES: "principiante"
                },
                imageURL: "https://www.svgrepo.com/show/354521/vitejs.svg",
            },
            {
                name: "Tailwind CSS",
                level: {
                    EN: "beginner",
                    ES: "principiante"
                },
                imageURL: "https://www.svgrepo.com/show/374118/tailwind.svg",
            },
        ]
    },
    {
        title: "skillsToolsTitle",
        skills: [
            {
                name: "git",
                level: {
                    EN: "intermediate",
                    ES: "intermedio"
                },
                imageURL: "https://www.svgrepo.com/show/452210/git.svg",
            },
            {
                name: "GitHub",
                level: {
                    EN: "intermediate",
                    ES: "intermedio"
                },
                imageURL: "https://www.svgrepo.com/show/512317/github-142.svg",
            },
            {
                name: "VS Code",
                level: {
                    EN: "intermediate",
                    ES: "intermedio"
                },
                imageURL: "https://www.svgrepo.com/show/354522/visual-studio-code.svg",
            }
        ]
    }
]

export const HomePage = () => {

    return (
        <div className="container mx-auto flex flex-col gap-10 p-5 pt-2 xl:pt-50 xl:pr-60 xl:pl-60">

            <Header/>

            {/* About and  self photo*/}
            <AboutCard/>

            <hr/>

            <ProjectsSection projects={projects}/>

            <SkillsSection skillGroups={skillGroups}/>

            {/* eslint-disable-next-line react/jsx-no-undef */}
            <ContactSection />
        </div>
    )
}
