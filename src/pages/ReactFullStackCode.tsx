import CodePageSetup from "../Components/CodePageSetup";

const ReactFullStackCode = () => {
    const markdownFilePath = '/ReactFullStackNotes/ReactFullStackNotesWithCode.md';

    return (

        <>

            <h1 className="Header">React Full-Stack Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ReactFullStackCode;
