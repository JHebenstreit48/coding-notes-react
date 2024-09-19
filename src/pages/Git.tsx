import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../GitNotes/GitNotes";
import gitItemsWithCode from "../GitNotes/GitNotesWithCode";
import "../CSS/Header.css";
export default function git() {

    return (

        <>
            <h1 className="Header">Git</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={gitItemsWithCode} />

        </>
    );

}
