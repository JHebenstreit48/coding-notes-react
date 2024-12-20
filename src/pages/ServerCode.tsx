import CodePageSetup from '../Components/CodePageSetup';
import Header from '../Components/Header';

const ServerCode = () => {
    const markdownFilePath = '/ServerNotes/SeverCode.md';

    return (
        <>

            <Header text="Server Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default ServerCode;

