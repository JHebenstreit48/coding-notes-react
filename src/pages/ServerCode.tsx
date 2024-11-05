import CodePageSetup from '../Components/CodePageSetup';
import Navigation from '../Components/Navigation';

const ServerCode = () => {
    const markdownFilePath = '../ServerNotes/SeverNotesWithCode.md';

    return (
        <>

            <h1 className="Header">Servers Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ServerCode;

