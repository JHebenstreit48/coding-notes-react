import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import items from "../Components/TypeScriptNotes";
import itemsWithCode from "../Components/TypeScriptNotesWithCode";

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
