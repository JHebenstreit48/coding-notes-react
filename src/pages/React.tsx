import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import items from "../ReactNotes/ReactNotes";
import reactItemsWithCode from "../ReactNotes/ReactCodeExamples";
import "../CSS/Header.css";


export default function react() {

    return (

        <>
            <h1 className="Header">React</h1>
            <Navigation />
            <DynamicNotes items={items} />
            <DynamicNotesCode items={reactItemsWithCode} />
        </>
    );

}
