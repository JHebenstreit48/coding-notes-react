import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";

const Testing = () => {
    const markdownFilePath = '/src/TestingNotes/TestingNotes.md';
    return (

        <>
        
            <h1 className="Header">Testing</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Testing;
