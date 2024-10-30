import Navigation from "../Components/Navigation";
import CodePageSetup from "../Components/CodePageSetup";
import "../CSS/Header.css";

const GitCode = () => {
    const markdownFilePath = '/src/GitNotes/GitNotesWithCode.md';

    return (

        <>

            <h1 className="Header">Git Code Notes</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default GitCode;
