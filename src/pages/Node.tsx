import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Navigation from "../Components/Navigation";
import items from "../NodeJSNotes/NodeJSNotes";
import itemsWithCode from "../NodeJSNotes/NodeJSNotesWithCode";
export default function nodeJS() {

    return (

        <>
            <h1 className="Header">Node JS</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
