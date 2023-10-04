import {Text} from "./";
import selfPhoto from "../../assets/selfphoto.jpg";

export const AboutCard = () => {
    return (
        <div id="home" className="mt-5 flex flex-col-reverse gap-10 lg:flex-row">

            {/* About */}
            <div className="flex flex-col gap-5">

                <h1 className="text-3xl font-bold text-slate-900">
                    <Text tid="infoCardTitle"/>
                </h1>

                <p className="text-lg text-slate-800">
                    <Text tid="infoCardDescription"/>
                </p>

                { /* Action buttons */}
                <div className="mt-5 flex flex-row gap-5">
                    <a className="rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-900">
                        <Text tid="infoCardDownloadCV"/>
                    </a>

                    <a href="https://github.com/LimbersMay" target="_blank" rel="noreferrer" className="rounded border border-b-slate-200 px-4 py-2 text-slate-800 hover:bg-gray-100">
                        <Text tid="infoCardViewGithub"/>
                    </a>
                </div>
            </div>

            {/* self image */}
            <img src={selfPhoto} alt="Myphoto" className="self-center rounded-xl md:h-56 md:w-56 lg:self-start"/>
        </div>
    )
}