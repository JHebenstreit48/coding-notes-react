import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const CSS = () => {
    const markdownFilePath = '/CSSNotes/CSS.md';

    return (

        <>
           <Header text="CSS" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CSS;
