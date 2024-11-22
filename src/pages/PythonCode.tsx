import CodePageSetup from "../Components/CodePageSetup.tsx";

const PythonCode = () => {
    const markdownFilePath = "/PythonNotes/PythonNotesWithCode.md";

    return (

        <>
        
            <h1 className="Header">Python Code Notes</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>
    );
};

export default PythonCode;
