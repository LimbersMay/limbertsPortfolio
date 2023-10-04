import {Text} from "./Text.tsx";

export const ContactCard = () => {
    return (
        <div className="flex flex-col gap-3 bg-gray-100 p-6 shadow-xl">
            <p className="text-slate-900">
                <span className="text-slate-900 font-bold"><Text tid="contactName"/>:</span> Limbert Otoniel May Ek
            </p>
            <p className="text-slate-900">
                <span className="text-slate-900 font-bold"><Text tid="contactEmail"/>: </span>limbermay1@gmail.com
            </p>
            <a className="border border-solid p-2 self-start bg-slate-900 rounded text-slate-100"
               href="mailto:limbermay1@gmail.com"><Text tid="contactSendEmail" /></a>
        </div>
    )
}
