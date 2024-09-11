import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import items from "../TypeScriptNotes/TypeScriptNotes";
import itemsWithCode from "../TypeScriptNotes/TypeScriptNotesWithCode";
import "../CSS/Header.css";

export default function typescript() {

    return (

        <>
            <h1 className="Header">TypeScript</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
