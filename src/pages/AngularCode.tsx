import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const AngularCode = () => {
    const markdownFilePath = '/AngularNotes/AngularNotesCode.md';

    return (

        <>

            <Header text="Angular Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default AngularCode;