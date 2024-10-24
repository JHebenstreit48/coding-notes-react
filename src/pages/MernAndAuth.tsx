import Navigation from "../Components/Navigation";
// import DynamicNotes, { DynamicNotesCode } from "../Components/DynamicNotes";
import "../CSS/Header.css";
// import MernAndAuthItems from "../MernAndAuth/MernAndAuthNotes.tsx";
// import MERNItemsWithCode from "../MernAndAuth/MernAndAuthNotesWCode.tsx";


export default function MernAndAuth() {

    return (

        <>
            <h1 className="Header">MERN Stack</h1>
            <Navigation />
            {/* <DynamicNotes items={ MernAndAuthItems } />
            <DynamicNotesCode items={ MERNItemsWithCode } /> */}
        </>
    );
}
