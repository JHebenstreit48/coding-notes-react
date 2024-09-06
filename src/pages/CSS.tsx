import Header from "../components/Header/Header";
import Navigation from "../components/Header/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../components/Notes/DynamicNotes";
import items from "../components/Notes/CSSNotes";
import itemsWithCode from "../components/Notes/CSSCodeExamples";
import '../CSS/Page.css'
import '../CSS/Card.css'
export default function CSS() {

    return (

        <>
            <Header text="CSS" />
            <Navigation />
            <DynamicNotes items={ items } />
            <DynamicNotesCode items={ itemsWithCode } />

        </>
    );

}
