import PageSetup from "../Components/PageSetup";

const Javascript = () => {
    const markdownFilePath = "/JavaScriptNotes/JavaScriptNotes.md";

    return (

        <>
            <h1 className="Header">JavaScript</h1>
            <PageSetup
                filePath={markdownFilePath}
            markdownContent="markdownContent"
            />
        </>
    );

};

export default Javascript;
