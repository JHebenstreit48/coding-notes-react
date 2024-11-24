import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const MongoDBCode = () => {
    const markdownFilePath = "/MongoDB/MongoDBNotesWithCode.md";

    return (

        <>
             <Header text="MongoDB Code" />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
            
        </>
    );

};

export default MongoDBCode;
