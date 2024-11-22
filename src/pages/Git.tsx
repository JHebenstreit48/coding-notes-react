import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const Git = () => {
    const markdownFilePath = './GitNotes/GitNotes.md';

    return (

        <>
            <h1 className="Header">Git</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Git;
