import PageSetup from "../Components/PageSetup";

const HTML = () => {
    const markdownFilePath = "/HTMLNotes/HTMLNotes.md";

    return (

        <>
            <h1 className="Header">HTML</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default HTML;
