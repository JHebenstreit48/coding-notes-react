import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const TestingCode = () => {
    const markdownFilePath = '../TestingNotes/TestingNotesWithCode.md';

    return (

        <>

            <h1 className="Header">Testing Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default TestingCode;
