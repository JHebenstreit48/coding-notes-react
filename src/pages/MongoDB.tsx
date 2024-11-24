import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const MongoDB = () => {
    const markdownFilePath = "/MongoDB/MongoDBNotes.md";

    return (

        <>
        
            <Header text="MongoDB" />
            <PageSetup
                filePath={markdownFilePath}
            markdownContent="markdownContent"            
             />

        </>
    );

};

export default MongoDB;
