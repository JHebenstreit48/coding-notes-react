import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import items from "../APINotes/APINotes";
import itemsWithCode from "../APINotes/APINotesWCode";
export default function apis() {

    return (

        <>
            <Header text="APIs" />
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
