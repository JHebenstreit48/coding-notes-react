import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import items from "../CSSNotes/CSSNotes";
import itemsWithCode from "../CSSNotes/CSSCodeExamples";
export default function css() {

    return (

        <>
            <h1 className="Header">CSS</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />

        </>
    );

}
