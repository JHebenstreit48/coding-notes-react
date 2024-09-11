import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../JavaScriptNotes/JavaScriptNotes";
import itemsWithCode from "../JavaScriptNotes/JavaScriptNotesWithCode";
export default function javascript() {

    return (

        <>
            <h1 className="Header">JavaScript</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
