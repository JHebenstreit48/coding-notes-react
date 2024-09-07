import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import items from "../Components/APINotes";
import itemsWithCode from "../Components/APINotesWCode";
export default function apis() {

    return (

        <>
            <Header text="APIs" />
            <Navigation />
            <DynamicNotes items={ items } />
            <DynamicNotesCode items={ itemsWithCode } />
        </>
    );

}
