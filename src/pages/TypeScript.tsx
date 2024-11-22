import PageSetup from "../Components/PageSetup";

const Typescript = () => {
    const markdownFilePath = '/TypeScriptNotes/TypeScriptNotes.md';

    return (

        <>
            <h1 className="Header">TypeScript</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Typescript;
