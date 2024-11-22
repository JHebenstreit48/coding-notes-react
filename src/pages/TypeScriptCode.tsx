import CodePageSetup from "../Components/CodePageSetup";

const TypeScriptCode = () => {
    const markdownFilePath = '/TypeScriptNotes/TypeScriptNotesWithCode.md';

    return (

        <>

            <h1 className="Header">TypeScript Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default TypeScriptCode;
