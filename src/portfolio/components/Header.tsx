import {ChangeEvent, useState} from "react";
import {Text} from "./";
import {usePreferencesStore} from "../../hooks";
import {Dictionary} from "../../languages";

export const Header = () => {

    const {changeLanguage, language} = usePreferencesStore();

    const [isOpened, setIsOpened] = useState(false);

    const onToggleMenu = () => {
        setIsOpened(!isOpened);
    }

    const onChangeLanguage = ({ target }: ChangeEvent<HTMLSelectElement>) => {
        changeLanguage(target.value as keyof Dictionary);
        setIsOpened(false);
    }

    return (
        <header className="mt-3 mb-10 flex justify-between">
            { /* Title */}
            <p className="text-xl font-bold text-slate-800 md:block">
                LIMBERT MAY
            </p>

            { /* Options */}
            <div className="hidden flex-grow justify-end gap-5 font-bold sm:flex">
                <a href="#home" className="text-slate-800">
                    <Text tid="headerHome"/>
                </a>
                <a href="#projects" className="text-slate-800">
                    <Text tid="headerProjects"/>
                </a>
                <a href="#skills" className="text-slate-800">
                    <Text tid="headerSkills"/>
                </a>
                <a href="#contact">
                    <Text tid="headerContact"/>
                </a>

                { /* Language options */}
                <div className="flex flex-row items-center gap-1 rounded border border-slate-400">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"/>
                    </svg>

                    <select value={language} onChange={onChangeLanguage}
                            className="appearance-none bg-inherit focus:outline-none">
                        <option value="EN">English</option>
                        <option value="ES">Spanish</option>
                    </select>
                </div>
            </div>

            { /* Mobile menu button */}
            <button onClick={onToggleMenu} className="sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
            </button>

            { /* Mobile menu */}
            <div
                className={`${
                    isOpened ? "translate-x-0" : "translate-x-full"
                } fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center gap-5 bg-slate-100 bg-opacity-90 text-slate-800 transition-transform ease-in-out duration-500`}
            >
                <a onClick={onToggleMenu} href="#home" className="text-xl font-bold">
                    <Text tid="headerHome"/>
                </a>
                <a onClick={onToggleMenu} href="#projects" className="text-slate-800">
                    <Text tid="headerProjects"/>
                </a>
                <a onClick={onToggleMenu} href="#skills" className="text-slate-800">
                    <Text tid="headerSkills"/>
                </a>
                <a onClick={onToggleMenu} href="#contact">
                    <Text tid="headerContact"/>
                </a>

                { /* Language options */}
                <div className="flex flex-row items-center gap-1 rounded border border-slate-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"/>
                    </svg>

                    <select value={language} onChange={onChangeLanguage}
                            className="appearance-none bg-inherit focus:outline-none">
                        <option value="EN">English</option>
                        <option value="ES">Spanish</option>
                    </select>
                </div>
            </div>

        </header>
    )
}
