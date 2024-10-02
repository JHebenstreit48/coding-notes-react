import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import pythonItemsWithCode from "../PythonNotes/PythonNotesWithCode";
import items from "../PythonNotes/PythonNotes";


export default function Python() {

    return (

        <>
            <h1 className="Header">MongoDB</h1>
            <Navigation />
            <DynamicNotes items={ items } />
            <DynamicNotesCode items={ pythonItemsWithCode } />

        </>
    );

}
