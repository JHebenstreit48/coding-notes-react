import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const MernAndAuthCode = () => {
    const markdownFilePath = '../MernAndAuth/MernAndAuthNotesWithCode.md';

    return (

        <>

            <h1 className="Header">MERN and Auth Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default MernAndAuthCode;
