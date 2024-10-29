import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";


const HTMLCode = () => {
    const markdownFilePath = '/src/HTMLNotes/HTMLCode.md';

    return (

        <>
            <h1 className="Header">HTML Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
        </>
    );

};

export default HTMLCode;
