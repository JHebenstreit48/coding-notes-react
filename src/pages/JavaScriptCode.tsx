import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const JavascriptCode = () => {
    const markdownFilePath = "/JavaScriptNotes/JavaScriptNotesWithCode.md";

    return (

        <>
             <Header text="JavaScript Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
        </>
    );

};

export default JavascriptCode;
