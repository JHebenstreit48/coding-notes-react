import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const  Python = () => {
    const markdownFilePath = '/PythonNotes/PythonNotes.md';

    return (

        <>
        
            <Header text="Python" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Python;
