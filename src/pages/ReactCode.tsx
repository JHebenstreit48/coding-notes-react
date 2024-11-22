import CodePageSetup from "../Components/CodePageSetup";

const ReactCode = () => {
    const markdownFilePath = '/ReactNotes/ReactNotesWithCode.md';

    return (

        <>

            <h1 className="Header">React Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ReactCode;
