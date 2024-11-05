import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const ReactCode = () => {
    const markdownFilePath = '../ReactNotes/ReactNotesWithCode.md';

    return (

        <>

            <h1 className="Header">React Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ReactCode;
