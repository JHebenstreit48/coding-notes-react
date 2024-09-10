import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import items from "../TypeScriptNotes/TypeScriptNotes";
import itemsWithCode from "../TypeScriptNotes/TypeScriptNotesWithCode";

export default function typescript() {

    return (

        <>
            <Header text="TypeScript" />
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
