import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";
import testingNotesMkdn from "../TestingNotes/TestingNotes";



export default function Python() {

    return (

        <>
        
            <h1 className="Header">Testing</h1>
            <Navigation />
            <PageSetup
                markdownContent={testingNotesMkdn}
            />

        </>
    );

}
