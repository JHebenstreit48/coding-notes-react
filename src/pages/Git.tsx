import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../GitNotes/GitNotes";
import itemsWithCode from "../GitNotes/GitNotesWithCode";
import "../CSS/Header.css";
export default function git() {

    return (

        <>
            <h1 className="Header">Git</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />

        </>
    );

}
