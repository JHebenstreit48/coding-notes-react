import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";
import "../CSS/Header.css";

const CSSCode = () => {
    const CSSCodeMkdn = '/CSSNotes/CSSCode.md';

    return (

        <>

            <Header text="CSS Code"/>
            <CodePageSetup
                filePath={CSSCodeMkdn}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default CSSCode;
