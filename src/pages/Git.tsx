import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import items from "../Notes/GitNotes";
import itemsWithCode from "../Notes/GitNotesWithCode";
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
