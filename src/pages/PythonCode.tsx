import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import CodePageSetup from "../Components/CodePageSetup.tsx";

const PythonCode = () => {
    const markdownFilePath = "../PythonNotes/PythonNotesWithCode.md";

    return (

        <>
        
            <h1 className="Header">Python Code Notes</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>
    );
};

export default PythonCode;
