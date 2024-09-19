import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import items from "../Notes/ExpressServersNotes";
import expressItemsWithCode from "../Notes/ExpressSeversCode";
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
