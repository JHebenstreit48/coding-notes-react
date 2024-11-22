import PageSetup from "../Components/PageSetup";

const  Python = () => {
    const markdownFilePath = '/PythonNotes/PythonNotes.md';

    return (

        <>
        
            <h1 className="Header">Python</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Python;
