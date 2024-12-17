import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const ReactNativeCode = () => {
    const markdownFilePath = '/ReactNative/ReactNativeCode.md';

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
