import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import items from "../ExpressServers/ExpressServersNotes";
import expressItemsWithCode from "../ExpressServers/ExpressSeversCode";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
export default function servers() {

    return (

        <>
            <h1 className="Header">Express Servers</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={expressItemsWithCode} />
        </>
    );
}
