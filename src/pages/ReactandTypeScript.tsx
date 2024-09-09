import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import items from "../Components/ReactWTypeScriptNotes"
import itemsWithCode from "../Components/ReactWTypeScriptNotesWithCode"
export default function ReactAndTypeScript() {

    return (

        <>
            <Header text="React + TypeScript" />
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );
}
