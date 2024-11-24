import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const PostgreSQL = () => {
    const markdownFilePath = '/PostgreSQL/PostgreSQLNotes.md';

    return (

        <>
             <Header text="PostgreSQL" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default PostgreSQL;
