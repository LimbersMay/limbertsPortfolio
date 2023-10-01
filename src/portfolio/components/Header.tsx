import {Text} from "./";

export const Header = () => {
    return (
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
    )
}
