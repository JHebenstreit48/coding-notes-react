import "../CSS/Header.css";
import "../CSS/NotesTables.css"
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const Angular = () => {
    const markdownFilePath = '/AngularNotes/Angular.md';

    return (

        <>
            <Header text="Angular" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Angular;
