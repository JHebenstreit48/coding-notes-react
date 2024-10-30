import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const CSSCode = () => {
    const markdownFilePath = '/src/CSSNotes/CSSNotesWithCode.md';

    return (

        <>

            <h1 className="Header">CSS Code Notes</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default CSSCode;
