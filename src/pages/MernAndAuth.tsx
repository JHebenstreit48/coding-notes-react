import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";
import mernAndAuthNotesMkdn from "../MernAndAuth/MernAuthNotes.md";


export default function MernAndAuth() {

    return (

        <>
            <h1 className="Header">MERN Stack</h1>
            <Navigation />
            <PageSetup
            markdownContent={mernAndAuthNotesMkdn}            
             />

        </>
    );
}
