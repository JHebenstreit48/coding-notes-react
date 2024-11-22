import CodePageSetup from "../Components/CodePageSetup";
import "../CSS/Header.css";

const GitCode = () => {
    const markdownFilePath = '/GitNotes/GitNotesWithCode.md';

    return (

        <>

            <h1 className="Header">Git Code Notes</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default GitCode;
