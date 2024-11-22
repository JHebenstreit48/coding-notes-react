import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const CSS = () => {
    const markdownFilePath = './CSSNotes/CSSNotes.md';

    return (

        <>
            <h1 className="Header">CSS</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSS;
