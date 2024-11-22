import CodePageSetup from "../Components/CodePageSetup";
import "../CSS/Header.css";


const HTMLCode = () => {
    const markdownFilePath = '/HTMLNotes/HTMLCode.md';

    return (

        <>
            <h1 className="Header">HTML Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
        </>
    );

};

export default HTMLCode;
