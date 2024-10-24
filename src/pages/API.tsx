import Navigation from "../Components/Navigation";
// import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import apiItemsWithCode from "../APINotes/APINotesWCode";
import "../CSS/Header.css";
import APINotes from "../APINotes/APINotes";
export default function APIs() {

    return (

        <>
            <h1 className="Header">APIs</h1>
            <Navigation />
            {/* <DynamicNotes items={APINotes} />
            <DynamicNotesCode items={apiItemsWithCode} /> */}
        </>
    );

}
