import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const TypeScriptCode = () => {
    const markdownFilePath = '/TypeScriptNotes/TypeScriptCode.md';

    return (

        <>

            <Header text="TypeScript Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default TypeScriptCode;
