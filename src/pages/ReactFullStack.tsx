import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const ReactFullStack = () => {
    const markdownFilePath = './ReactFullStackNotes/ReactFullStackNotes.md';

    return (

        <>
            <h1 className="Header">React Full-Stack</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ReactFullStack;
