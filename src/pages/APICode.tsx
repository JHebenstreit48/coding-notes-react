import CodePageSetup from '../Components/CodePageSetup';
import Header from '../Components/Header';
import '../CSS/Header.css';

const APICode = () => {
    const markdownFilePath = '/APINotes/APINotesWithCode.md';

    return (
        <>

            <Header text="API Notes Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default APICode;
