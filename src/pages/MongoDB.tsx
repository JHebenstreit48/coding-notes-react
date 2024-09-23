// import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import items from "../MongoDB/MongoDBNotes";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import mongoDBItemsWithCode from "../MongoDB/MongoDBNotesWCode";
import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
export default function MongoDB() {

    return (

        <>
            <h1 className="Header">MongoDB</h1>
            <Navigation />
            <DynamicNotes items={ items } />
            <DynamicNotesCode items={ mongoDBItemsWithCode } />

        </>
    );

}
