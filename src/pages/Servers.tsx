import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import serversNotes from "../Servers/ServersNotes";
import serversNotesWCode from "../Servers/SeversNotesWCode";
export default function servers() {

    return (

        <>
            <h1 className="Header">Servers</h1>
            <Navigation />
            <DynamicNotes items={serversNotes} />
            <DynamicNotesCode items={serversNotesWCode} />
        </>
    );
}
