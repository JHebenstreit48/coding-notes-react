import PageSetup from "../Components/PageSetup";

const MongoDB = () => {
    const markdownFilePath = "/MongoDB/MongoDBNotes.md";

    return (

        <>
        
            <h1 className="Header">MongoDB</h1>
            <PageSetup
                filePath={markdownFilePath}
            markdownContent="markdownContent"            
             />

        </>
    );

};

export default MongoDB;
