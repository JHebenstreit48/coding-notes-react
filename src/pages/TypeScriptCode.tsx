import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const TypeScriptCode = () => {
    const markdownFilePath = '../TypeScriptNotes/TypeScriptNotesWithCode.md';

    return (

        <>

            <h1 className="Header">TypeScript Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default TypeScriptCode;
