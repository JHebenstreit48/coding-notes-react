import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import items from "../JavaScriptNotes/JavaScriptNotes";
import itemsWithCode from "../JavaScriptNotes/JavaScriptNotesWithCode";
export default function javascript() {

    return (

        <>
            <Header text="JavaScript" />
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
