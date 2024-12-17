import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const ReduxCode = () => {
    const markdownFilePath = '/ReduxNotes/ReduxCode.md';

    return (

        <>

            <Header text="Redux Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ReduxCode;
