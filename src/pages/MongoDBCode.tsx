import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import CodePageSetup from "../Components/CodePageSetup";

const MongoDBCode = () => {
    const markdownFilePath = "../MongoDB/MongoDBNotesWithCode.md";

    return (

        <>
            <h1 className="Header">MongoDB</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
            
        </>
    );

};

export default MongoDBCode;
