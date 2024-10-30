import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const JavascriptCode = () => {
    const markdownFilePath = "/src/JavascriptNotes/JavascriptNotesWithCode.md";

    return (

        <>
            <h1 className="Header">JavaScript Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
        </>
    );

};

export default JavascriptCode;
