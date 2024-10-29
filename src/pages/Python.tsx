import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";

const  Python = () => {
    const markdownFilePath = '/src/PythonNotes/PythonNotes.md';

    return (

        <>
        
            <h1 className="Header">Python</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Python;
