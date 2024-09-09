// import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import items from "../Components/WebAPINotes";
import itemsWithCode from "../Components/WebAPINotesWithCode";
export default function WebAPI() {

    return (

        <>
            <Header text="Web APIs" />
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );
}
