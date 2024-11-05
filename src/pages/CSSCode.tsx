import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const CSSCode = () => {
    const CSSCodeMkdn = '../CSSNotes/CSSCode.md';

    return (

        <>

            <h1 className="Header">CSS Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={CSSCodeMkdn}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default CSSCode;
