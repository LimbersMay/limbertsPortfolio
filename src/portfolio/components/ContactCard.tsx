import {Text} from "./Text.tsx";

export const ContactCard = () => {
    return (
        <div className="flex flex-col gap-3 bg-gray-100 p-6 shadow-xl">
            <p className="text-slate-900">
                <span className="font-bold text-slate-900"><Text tid="contactName"/>:</span> Limbert Otoniel May Ek
            </p>
            <p className="text-slate-900">
                <span className="font-bold text-slate-900"><Text tid="contactEmail"/>: </span>limbermay1@gmail.com
            </p>
            <a className="self-start rounded border border-solid bg-slate-900 p-2 text-slate-100"
               href="mailto:limbermay1@gmail.com"><Text tid="contactSendEmail" /></a>
        </div>
    )
}
