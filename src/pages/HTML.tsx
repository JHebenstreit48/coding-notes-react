import DynamicNotes, { DynamicNotesCode } from "../components/Notes/DynamicNotes";
import items from "../components/Notes/HTMLNotes";
import itemsWithCode from "../components/Notes/HTMLCodeExamples";
import Navigation from "../components/Header/Navigation";
import '../CSS/PageCSS.css'
import '../CSS/Card.css'


export default function HTML() {

    return (

        <>
            <h1 className="Header">HTML</h1>
            <Navigation />
            <DynamicNotes items={ items } />
            <DynamicNotesCode items={ itemsWithCode } />
        </>
    );

}
