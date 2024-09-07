import DynamicNotes, { DynamicNotesCode } from "../Components/OtherComponents/DynamicNotes";
import items from "../Components/HTMLNotes/HTMLNotes";
import itemsWithCode from "../Components/HTMLNotes/HTMLCodeExamples";
import Navigation from "../Components/HeaderNavFooter/Navigation";
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
