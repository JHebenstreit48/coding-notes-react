import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import CodePageSetup from "../Components/CodePageSetup";
import ServerNotesWithCodeMkdn from "../ServerNotes/SeversNotesWCode";
export default function ServerCode() {

    return (

        <>
            <h1 className="Header">Servers</h1>
            <Navigation />
            <CodePageSetup
            markdownContentCode={ServerNotesWithCodeMkdn}
            />
        </>
    );
}
