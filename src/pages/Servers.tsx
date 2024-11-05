import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";

const Servers = () => {
    const markdownFilePath = './ServerNotes/ServerNotes.md';

    return (

        <>
            <h1 className="Header">Servers</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Servers;
