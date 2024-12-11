import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";


const MarkdownCode = () => {
    const markdownFilePath = '/MarkdownNotes/MarkdownCode.md';

    return (

        <>
            <Header text="Markdown Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
        </>
    );

};

export default MarkdownCode;
