import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const Git = () => {
    const markdownFilePath = '/src/GitNotes/GitNotes.md';

    return (

        <>
            <h1 className="Header">Git</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Git;
