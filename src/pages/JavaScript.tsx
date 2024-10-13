import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import Navigation from "../Components/Navigation";
import JavaScriptItems from "../JavaScriptNotes/JavaScriptNotes";
import javascriptItemsWithCode from "../JavaScriptNotes/JavaScriptNotesWithCode";
import "../CSS/Header.css";
export default function javascript() {

    return (

        <>
            <h1 className="Header">JavaScript</h1>
            <Navigation />
            <DynamicNotes items={ JavaScriptItems } />
            <DynamicNotesCode items={ javascriptItemsWithCode } />
        </>
    );

}
