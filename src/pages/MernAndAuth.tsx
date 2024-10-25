import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";
import PageSetupCode from "../Components/CodePageSetup";
import mernAndAuthNotesMkdn from "../MernAndAuth/MERNAndAuthNotes";
import mernAndAuthNotesWithCodeMkdn from "../MernAndAuth/MernAndAuthNotesWithCode";


export default function MernAndAuth() {

    return (

        <>
            <h1 className="Header">MERN Stack</h1>
            <Navigation />
            <PageSetup
            markdownContent={mernAndAuthNotesMkdn}            
             />
            <PageSetupCode
            markdownContentCode={mernAndAuthNotesWithCodeMkdn}
            />

        </>
    );
}
