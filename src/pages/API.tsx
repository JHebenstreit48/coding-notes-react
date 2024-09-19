import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import items from "../APINotes/APINotes";
import apiItemsWithCode from "../APINotes/APINotesWCode";
import "../CSS/Header.css";
export default function apis() {

    return (

        <>
            <h1 className="Header">APIs</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={apiItemsWithCode} />
        </>
    );

}
