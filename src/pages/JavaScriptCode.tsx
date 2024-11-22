import CodePageSetup from "../Components/CodePageSetup";

const JavascriptCode = () => {
    const markdownFilePath = "/JavaScriptNotes/JavaScriptNotesWithCode.md";

    return (

        <>
            <h1 className="Header">JavaScript Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
        </>
    );

};

export default JavascriptCode;
