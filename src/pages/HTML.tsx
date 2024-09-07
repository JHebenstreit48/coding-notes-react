import DynamicNotes, { DynamicNotesCode } from "../Components/Notes/DynamicNotes";
import items from "../Components/Notes/HTMLNotes/HTMLNotes";
import itemsWithCode from "../Components/Notes/HTMLNotes/HTMLCodeExamples";
import Navigation from "../Components/Header/Navigation";
import '../CSS/Page.css'
import '../CSS/Card.css'


export default function HTML() {

    return (

        <>
            <h1 className="Header">HTML</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
