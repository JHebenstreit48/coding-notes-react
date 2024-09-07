import Header from "../Components/HeaderNavFooter/Header";
import Navigation from "../Components/HeaderNavFooter/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Components/OtherComponents/DynamicNotes";
import items from "../Components/CSSNotes/CSSNotes";
import itemsWithCode from "../Components/CSSNotes/CSSCodeExamples";
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
