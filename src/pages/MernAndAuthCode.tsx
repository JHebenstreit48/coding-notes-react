import CodePageSetup from "../Components/CodePageSetup";

const MernAndAuthCode = () => {
    const markdownFilePath = '/MernAndAuth/MernAndAuthNotesWithCode.md';

    return (

        <>

            <h1 className="Header">MERN and Auth Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default MernAndAuthCode;
