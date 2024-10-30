import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const Node = () => {
    const markdownFilePath = '/src/NodeNotes/NodeNotes.md';

    return (

        <>
            <h1 className="Header">Node</h1>
            <Navigation />
            <PageSetup 
            filePath={markdownFilePath}
            markdownContent="markdownContent
            "/>
        </>
    );

};

export default Node;
