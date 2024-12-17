import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";
import "../CSS/Header.css";

const GitCode = () => {
    const markdownFilePath = '/GitNotes/GitCode.md';

    return (

        <>

            <Header text="Git Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default GitCode;
