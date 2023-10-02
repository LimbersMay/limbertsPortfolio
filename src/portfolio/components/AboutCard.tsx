import {Text} from "./";
import selfPhoto from "../../assets/selfphoto.jpg";

export const AboutCard = () => {
    return (
        <div className="mt-5 flex flex-col-reverse gap-10 lg:flex-row">

            {/* About */}
            <div className="flex flex-col gap-5">

                <h1 className="text-3xl font-bold text-slate-900">
                    <Text tid="infoCardTitle"/>
                </h1>

                <p className="text-lg text-slate-800">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur dolore eaque
                    eligendi error eum eveniet
                    excepturi expedita fuga ipsum itaque, modi, nesciunt nisi placeat repudiandae temporibus veniam
                    vero voluptatum.
                </p>

                { /* Action buttons */}
                <div className="mt-5 flex flex-row gap-5">
                    <button className="rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-900">
                        <Text tid="infoCardDownloadCV"/>
                    </button>

                    <button className="rounded border border-b-slate-200 px-4 py-2 text-slate-800 hover:bg-gray-100">
                        <Text tid="infoCardViewGithub"/>
                    </button>
                </div>
            </div>

            {/* self image */}
            <img src={selfPhoto} alt="Myphoto" className="self-center rounded-xl md:h-56 md:w-56 lg:self-start"/>
        </div>
    )
}