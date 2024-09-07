import Header from "../Components/Header/Header";
import Navigation from "../Components/Header/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Components/Notes/DynamicNotes";
import items from "../Components/Notes/CSSNotes/CSSNotes";
import itemsWithCode from "../Components/Notes/CSSNotes/CSSCodeExamples";
import '../CSS/Page.css'
import '../CSS/Card.css'
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
