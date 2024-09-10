import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import items from "../GitNotes/GitNotes";
import itemsWithCode from "../GitNotes/GitNotesWithCode";
export default function git() {

    return (

        <>
            <Header text="Git" />
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />

        </>
    );

}
