import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const Testing = () => {
    const markdownFilePath = './TestingNotes/TestingNotes.md';
    return (

        <>
        
            <Header text="Testing" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Testing;
