import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const ReactNative = () => {
    const markdownFilePath = '/ReactNative/ReactNative.md';

    return (

        <>
            <Header text="React Native" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ReactNative;
