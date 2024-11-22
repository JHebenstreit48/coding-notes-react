import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const ReactAndTypeScriptCode = () => {
    const markdownFilePath = '../public/ReactAndTS/ReactAndTypeScriptNotesWithCode.md';

    return (

        <>

            <h1 className="Header">React + TypeScript Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ReactAndTypeScriptCode;
