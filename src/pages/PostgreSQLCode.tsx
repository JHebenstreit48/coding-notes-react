import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const PostgreSQLCode = () => {
    const markdownFilePath = '../PostgreSQL/PostgreSQLNotesWithCode.md';

    return (

        <>

            <h1 className="Header">PostgreSQL Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default PostgreSQLCode;
