import {Text} from "./Text.tsx";
import {ContactCard} from "./ContactCard.tsx";

export const ContactSection = () => {
    return (
        <div id="contact" className="flex flex-col gap-2">

            <h1 className="text-3xl font-bold text-slate-900">
                <Text tid="headerContact"/>
            </h1>

            <ContactCard />
        </div>
    )
}