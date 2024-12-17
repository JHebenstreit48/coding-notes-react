import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const VitestCode = () => {
    const markdownFilePath = '/VitestNotes/VitestCode.md';

    return (

        <>
            <Header text="Vitest Testing Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>
    );

};

export default VitestCode;
