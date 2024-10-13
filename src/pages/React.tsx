import Navigation from "../Components/Navigation";
import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import "../CSS/Header.css";
import ReactItems from "../ReactNotes/ReactNotes";
import ReactItemsWithCode from "../ReactNotes/ReactCodeExamples";


export default function react() {

    return (

        <>
            <h1 className="Header">React</h1>
            <Navigation />
            <DynamicNotes items={ ReactItems } />
            <DynamicNotesCode items={ ReactItemsWithCode } />
        </>
    );

}
