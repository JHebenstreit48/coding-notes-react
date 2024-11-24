import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const TestingCode = () => {
    const markdownFilePath = '/TestingNotes/TestingNotesWithCode.md';

    return (

        <>

            <Header text="Testing Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default TestingCode;
