// import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../Notes/WebAPINotes";
import itemsWithCode from "../Notes/WebAPINotesWithCode";
export default function webAPI() {

    return (

        <>
            <h1 className="Header">Web APIs</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );
}
