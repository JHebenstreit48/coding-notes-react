import CodePageSetup from "../Components/CodePageSetup";

const TestingCode = () => {
    const markdownFilePath = '/TestingNotes/TestingNotesWithCode.md';

    return (

        <>

            <h1 className="Header">Testing Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default TestingCode;
