import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import items from "../HTMLNotes/HTMLNotes";
import itemsWithCode from "../HTMLNotes/HTMLCodeExamples";
import Navigation from "../Components/Navigation";


export default function html() {

    return (

        <>
            <h1 className="Header">HTML</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
