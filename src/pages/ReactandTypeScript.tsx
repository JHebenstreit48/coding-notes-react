import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../ReactWithTS/ReactWTypeScriptNotes";
import itemsWithCode from "../ReactWithTS/ReactWTypeScriptNotesWithCode"
export default function reactAndTypeScript() {

    return (

        <>
            <h1 className="Header">React + TypeScript</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );
}
