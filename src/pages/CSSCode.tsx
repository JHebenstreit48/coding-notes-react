import CodePageSetup from "../Components/CodePageSetup";
import "../CSS/Header.css";

const CSSCode = () => {
    const CSSCodeMkdn = '/CSSNotes/CSSCode.md';

    return (

        <>

            <h1 className="Header">CSS Code</h1>
            <CodePageSetup
                filePath={CSSCodeMkdn}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default CSSCode;
