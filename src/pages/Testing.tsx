import PageSetup from "../Components/PageSetup";

const Testing = () => {
    const markdownFilePath = './TestingNotes/TestingNotes.md';
    return (

        <>
        
            <h1 className="Header">Testing</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Testing;
