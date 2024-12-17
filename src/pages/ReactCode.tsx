import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const ReactCode = () => {
    const markdownFilePath = '/ReactNotes/ReactCode.md';

    return (

        <>

            <Header text="React Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ReactCode;
