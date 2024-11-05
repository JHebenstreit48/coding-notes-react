import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";

const MongoDB = () => {
    const markdownFilePath = "./MongoDB/MongoDBNotes.md";

    return (

        <>
        
            <h1 className="Header">MongoDB</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
            markdownContent="markdownContent"            
             />

        </>
    );

};

export default MongoDB;
