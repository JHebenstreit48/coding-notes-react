import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import htmlItemsWithCode from "../HTMLNotes/HTMLCodeExamples";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import HTMLItems from "../HTMLNotes/HTMLNotes";


export default function html() {

    return (

        <>
            <h1 className="Header">HTML</h1>
            <Navigation />
            <DynamicNotes items={ HTMLItems } />
            <DynamicNotesCode items={htmlItemsWithCode} />
        </>
    );

}
