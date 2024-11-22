import CodePageSetup from "../Components/CodePageSetup";

const NodeCode = () => {
    const markdownFilePath = '/NodeNotes/NodeNotesWithCode.md';

    return (

        <>

            <h1 className="Header">Node Code Notes</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default NodeCode;
