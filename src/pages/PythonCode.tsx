import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import pythonNotesWithCodeMkdn from "../PythonNotes/PythonNotesWithCode";
import PageSetupCode from "../Components/CodePageSetup";



export default function Python() {

    return (

        <>
        
            <h1 className="Header">Python</h1>
            <Navigation />
            <PageSetupCode
                markdownContentCode={pythonNotesWithCodeMkdn}
            />

        </>
    );

}
