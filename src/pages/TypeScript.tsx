import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const Typescript = () => {
    const markdownFilePath = './TypeScriptNotes/TypeScriptNotes.md';

    return (

        <>
            <h1 className="Header">TypeScript</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Typescript;
