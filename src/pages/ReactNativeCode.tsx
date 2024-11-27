import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const ReactNativeCode = () => {
    const markdownFilePath = '/ReactNative/ReactNativeCodeNotes.md';

    return (

        <>
            <Header text="React Native Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>
    );

};

export default ReactNativeCode;
