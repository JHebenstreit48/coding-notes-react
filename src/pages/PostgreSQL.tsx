import PageSetup from "../Components/PageSetup";

const PostgreSQL = () => {
    const markdownFilePath = '/PostgreSQL/PostgreSQLNotes.md';

    return (

        <>
            <h1 className="Header">PostgreSQL</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default PostgreSQL;
