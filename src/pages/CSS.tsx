import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import items from "../CSSNotes/CSSNotes";
import cssItemsWithCode from "../CSSNotes/CSSCodeExamples";
import "../CSS/Header.css";
export default function css() {

    return (

        <>
            <h1 className="Header">CSS</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={cssItemsWithCode} />

        </>
    );

}
