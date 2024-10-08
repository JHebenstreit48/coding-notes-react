import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../ReactWithTS/ReactWTypeScriptNotes";
import reactAndTypescriptItemsWithCode from "../ReactWithTS/ReactWTypeScriptNotesWithCode";
import "../CSS/Header.css";
export default function reactAndTypeScript() {

    return (

        <>
            <h1 className="Header">React + TypeScript</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={reactAndTypescriptItemsWithCode} />
        </>
    );
}
