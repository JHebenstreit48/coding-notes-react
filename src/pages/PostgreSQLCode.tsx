import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const PostgreSQLCode = () => {
    const markdownFilePath = '/PostgreSQL/PostgreSQLNotesWithCode.md';

    return (

        <>

            <Header text="PostgreSQL Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default PostgreSQLCode;
