import CodePageSetup from "../Components/CodePageSetup";
import Header from "../Components/Header";

const MongoDBCode = () => {
    const markdownFilePath = "/MongoDB/MongoDBCode.md";

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
