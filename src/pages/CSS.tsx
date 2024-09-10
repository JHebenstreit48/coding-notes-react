import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import items from "../CSSNotes/CSSNotes";
import itemsWithCode from "../CSSNotes/CSSCodeExamples";
export default function CSS() {

    return (

        <>
            <Header text="CSS" />
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />

        </>
    );

}
