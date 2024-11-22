import CodePageSetup from '../Components/CodePageSetup';

const ServerCode = () => {
    const markdownFilePath = '/ServerNotes/SeverNotesWithCode.md';

    return (
        <>

            <h1 className="Header">Servers Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ServerCode;

