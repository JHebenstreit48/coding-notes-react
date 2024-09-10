import DynamicNotes, { DynamicNotesCode } from "../Notes/DynamicNotes";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import items from "../NodeJSNotes/NodeJSNotes";
import itemsWithCode from "../NodeJSNotes/NodeJSNotesWithCode";
export default function NodeJS() {

    return (

        <>
            <Header text="Node" />
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={itemsWithCode} />
        </>
    );

}
