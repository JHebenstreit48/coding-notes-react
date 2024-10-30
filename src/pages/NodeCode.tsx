import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const NodeCode = () => {
    const markdownFilePath = '/src/NodeNotes/NodeNotesWithCode.md';

    return (

        <>

            <h1 className="Header">Node Code Notes</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default NodeCode;
