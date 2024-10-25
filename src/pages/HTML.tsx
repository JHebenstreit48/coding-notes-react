import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";
import HTMLNotesMkdn from "../HTMLNotes/HTMLNotes.tsx";


export default function HTMLNotes() {

    return (

        <>
            <h1 className="Header">HTML</h1>
            <Navigation />
            <PageSetup
            markdownContent={HTMLNotesMkdn}            
             />
        </>
    );

}
