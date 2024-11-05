import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";


const PostgreSQL = () => {
    const markdownFilePath = './PostgreSQL/PostgreSQLNotes.md';

    return (

        <>
            <h1 className="Header">PostgreSQL</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default PostgreSQL;
