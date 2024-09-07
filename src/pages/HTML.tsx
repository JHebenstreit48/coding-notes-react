import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import items from "../Components/HTMLNotes";
import itemsWithCode from "../Components/HTMLCodeExamples";
import Navigation from "../Components/Navigation";
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
