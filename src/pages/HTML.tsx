import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import items from "../HTMLNotes/HTMLNotes";
import htmlItemsWithCode from "../HTMLNotes/HTMLCodeExamples";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";


export default function html() {

    return (

        <>
            <h1 className="Header">HTML</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={htmlItemsWithCode} />
        </>
    );

}
