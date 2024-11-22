import CodePageSetup from '../Components/CodePageSetup';
import '../CSS/Header.css';

const APICode = () => {
    const markdownFilePath = '/APINotes/APINotesWithCode.md';

    return (
        <>

            <h1 className="Header">API Code Notes</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default APICode;
