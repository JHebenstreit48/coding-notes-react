import PageSetup from "../Components/PageSetup";

const Node = () => {
    const markdownFilePath = '/NodeNotes/NodeNotes.md';

    return (

        <>
            <h1 className="Header">Node</h1>
            <PageSetup 
            filePath={markdownFilePath}
            markdownContent="markdownContent
            "/>
        </>
    );

};

export default Node;
