import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../JavaScriptNotes/JavaScriptNotes";
import javascriptItemsWithCode from "../JavaScriptNotes/JavaScriptNotesWithCode";
import "../CSS/Header.css";
export default function javascript() {

    return (

        <>
            <h1 className="Header">JavaScript</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={javascriptItemsWithCode} />
        </>
    );

}
