import CodePageSetup from "../Components/CodePageSetup";

const MongoDBCode = () => {
    const markdownFilePath = "/MongoDB/MongoDBNotesWithCode.md";

    return (

        <>
            <h1 className="Header">MongoDB</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />
            
        </>
    );

};

export default MongoDBCode;
