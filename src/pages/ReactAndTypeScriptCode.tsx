import CodePageSetup from "../Components/CodePageSetup";

const ReactAndTypeScriptCode = () => {
    const markdownFilePath = '/ReactAndTS/ReactAndTypeScriptNotesWithCode.md';

    return (

        <>

            <h1 className="Header">React + TypeScript Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ReactAndTypeScriptCode;
