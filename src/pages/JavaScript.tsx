import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const Javascript = () => {
    const markdownFilePath = "./JavaScriptNotes/JavaScriptNotes.md";

    return (

        <>
            <h1 className="Header">JavaScript</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
            markdownContent="markdownContent"
            />
        </>
    );

};

export default Javascript;
