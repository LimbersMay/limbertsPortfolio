import {Text} from "../components/Text.tsx";
import {useEffect} from "react";
import {usePreferencesStore} from "../../hooks";

import selfPhoto from "../../assets/selfphoto.jpg";

export const HomePage = () => {

    const {loadLanguage} = usePreferencesStore();

    // Load the user preferences
    useEffect(() => {
        loadLanguage();
    });

    return (
        <div className="container flex flex-col mx-auto p-5 pt-2 xl:pl-60 xl:pr-60 xl:pt-50 gap-10">

            <header className="flex mb-10 mt-3 items-center">
                { /* Title */}
                <p className="font-bold text-xl text-slate-800 hidden md:block">
                    LIMBERT MAY
                </p>

                { /* Options */}
                <div className="hidden flex-grow justify-end gap-5 font-bold sm:flex">
                    <button className="text-slate-800">
                        <Text tid="headerHome"/>
                    </button>
                    <button className="text-slate-800">
                        <Text tid="headerAbout"/>
                    </button>
                    <button className="text-slate-800">
                        <Text tid="headerProjects"/>
                    </button>
                    <button className="text-slate-800">
                        <Text tid="headerContact"/>
                    </button>

                    { /* Language options */}
                    <div className="flex flex-row items-center gap-5 rounded border border-slate-400">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                        </svg>

                        <select className="focus:outline-none appearance-none bg-inherit">
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                        </select>
                    </div>

                </div>
            </header>


            {/* About and  self photo*/}
            <div className="flex flex-col-reverse lg:flex-row gap-10 mt-5">

                {/* About */}
                <div className="flex flex-col gap-5">

                    <h1 className="font-bold text-slate-900 text-3xl">
                        <Text tid="infoCardTitle"/>
                    </h1>

                    <p className="text-slate-800 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur dolore eaque
                        eligendi error eum eveniet
                        excepturi expedita fuga ipsum itaque, modi, nesciunt nisi placeat repudiandae temporibus veniam
                        vero voluptatum.
                    </p>

                    { /* Action buttons */}
                    <div className="flex flex-row gap-5 mt-5">
                        <button className="bg-slate-800 text-white py-2 px-4 rounded hover:bg-slate-900">
                            <Text tid="infoCardDownloadCV"/>
                        </button>

                        <button className="text-slate-800 py-2 px-4 rounded border border-b-slate-200 hover:bg-gray-100">
                            <Text tid="infoCardViewGithub"/>
                        </button>
                    </div>

                </div>

                {/* self image */}
                <img src={selfPhoto} alt="Myphoto" className="rounded-xl self-center lg:self-start md:w-56 md:h-56"/>
            </div>

            <hr/>

            {/* Projects section */}
            <div className="flex flex-col gap-5 mt-5">
                <h1 className="font-bold text-slate-900 text-3xl">
                    <Text tid="projectsTitle"/>
                </h1>

                <p className="text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet atque aut fugit iusto libero
                </p>

                { /* Project carss */}
                <div className="flex flex-col">

                    { /* Project 1 card */}
                    <div className="flex flex-col gap-10 sm:flex-row sm:gap-0 bg-slate-100 justify-between p-5">
                        { /* Project information */}
                        <div className="flex flex-col gap-5">
                            <h2 className="font-bold text-xl">
                                WebNotes
                            </h2>

                            <p>
                                Some long description about the project and how it works and what it does and why it is so cool
                            </p>

                            { /* Project technologies */}
                            <div className="flex flex-row flex-wrap gap-5">

                                <span className="bg-slate-200 rounded py-1 px-2 text-slate-800">
                                    NodeJS
                                </span>

                                <span className="bg-slate-200 rounded py-1 px-2 text-slate-800">
                                    Express
                                </span>

                                <span className="bg-slate-200 rounded py-1 px-2 text-slate-800">
                                    Handlebars
                                </span>

                                <span className="bg-slate-200 rounded py-1 px-2 text-slate-800">
                                    Javascript
                                </span>

                                <span className="bg-slate-200 rounded py-1 px-2 text-slate-800">
                                    HTML5
                                </span>

                                <span className="bg-slate-200 rounded py-1 px-2 text-slate-800">
                                    CSS3
                                </span>
                            </div>

                            { /* Project action buttons */}
                            <div className="flex flex-row gap-5 mt-5">
                                <button className="flex flex-row gap-2 items-center bg-slate-800 text-white py-2 px-4 rounded hover:bg-slate-900">
                                    <Text tid="projectCardViewProject"/>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        { /* Project image */}
                        {/*<img src={ project1 } alt="Project 1" className="hidden sm:block sm:w-60 sm:h-56"/>*/}
                    </div>
                </div>

            </div>

        </div>
    )
}
