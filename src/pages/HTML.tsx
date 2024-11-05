import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const HTML = () => {
    const markdownFilePath = "./HTMLNotes/HTMLNotes.md";

    return (

        <>
            <h1 className="Header">HTML</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default HTML;
