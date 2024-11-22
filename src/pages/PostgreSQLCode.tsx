import CodePageSetup from "../Components/CodePageSetup";

const PostgreSQLCode = () => {
    const markdownFilePath = '/PostgreSQL/PostgreSQLNotesWithCode.md';

    return (

        <>

            <h1 className="Header">PostgreSQL Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default PostgreSQLCode;
