import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const MernAndAuthCode = () => {
    const markdownFilePath = '/MernAndAuth/MernAndAuthCode.md';

    return (

        <>

             <Header text="Mern Stack Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default MernAndAuthCode;
