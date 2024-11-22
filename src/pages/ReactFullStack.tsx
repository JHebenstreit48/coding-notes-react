import PageSetup from "../Components/PageSetup";

const ReactFullStack = () => {
    const markdownFilePath = '/ReactFullStackNotes/ReactFullStackNotes.md';

    return (

        <>
            <h1 className="Header">React Full-Stack</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ReactFullStack;
