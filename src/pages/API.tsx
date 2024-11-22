import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";

const APIs = () => {
    const markdownFilePath = '../public/APINotes/APINotes.md';

    return (

        <>
            <h1 className="Header">APIs</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default APIs;
