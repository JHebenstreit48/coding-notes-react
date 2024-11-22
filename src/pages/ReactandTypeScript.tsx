import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";

const ReactAndTypeScript = () => {
    const markdownFilePath = "/ReactAndTS/ReactAndTypeScriptNotes.md";

    return (

        <>
            <h1 className="Header">React + TypeScript</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default ReactAndTypeScript;
