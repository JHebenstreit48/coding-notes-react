import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";

const APIs = () => {
    const markdownFilePath = '/src/APINotes/APINotes.md';

    return (

        <>
            <h1 className="Header">APIs</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default APIs;
