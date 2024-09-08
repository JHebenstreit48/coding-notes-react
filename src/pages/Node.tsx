import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import items from "../Components/NodeJSNotes";
import itemsWithCode from "../Components/NodeJSNotesWithCode";
export default function NodeJS() {

    return (

        <>
            <Header text="Node" />
            <Navigation />
            <DynamicNotes items={ items } />
            <DynamicNotesCode items={ itemsWithCode } />
        </>
    );

}
