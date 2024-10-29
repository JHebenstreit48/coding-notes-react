import CodePageSetup from '../Components/CodePageSetup';
import Navigation from '../Components/Navigation';
import '../CSS/Header.css';

const APICode = () => {
    const markdownFilePath = '/src/APINotes/APINotesWithCode.md';

    return (
        <>

            <h1 className="Header">API Code Notes</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default APICode;
