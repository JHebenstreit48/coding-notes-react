import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";
import ServerNotesMkdn from "../ServerNotes/ServersNotes";
export default function Servers() {

    return (

        <>
            <h1 className="Header">Servers</h1>
            <Navigation />
            <PageSetup
            markdownContent={ServerNotesMkdn}
            />
        </>
    );
}
