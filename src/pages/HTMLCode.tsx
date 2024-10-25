import PageSetupCode from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import HTMLNotesWithCodeMkdn from "../HTMLNotes/HTMLCodeExamples";


export default function HTMLCode() {

    return (

        <>
            <h1 className="Header">HTML Code</h1>
            <Navigation />
            <PageSetupCode
            markdownContentCode={HTMLNotesWithCodeMkdn}
            />
        </>
    );

}
