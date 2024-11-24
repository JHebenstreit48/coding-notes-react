import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";


const HTMLCode = () => {
    const markdownFilePath = '/HTMLNotes/HTMLCode.md';

    return (

        <>
            <Header text="HTML Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
        </>
    );

};

export default HTMLCode;
