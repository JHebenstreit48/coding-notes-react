import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import items from "../Notes/CSSNotes";
import itemsWithCode from "../Notes/CSSCodeExamples";
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
