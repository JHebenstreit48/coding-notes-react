import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import items from "../APINotes/APINotes";
import itemsWithCode from "../APINotes/APINotesWCode";
export default function apis() {

    return (

        <>
            <h1 className="Header">APIs</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
