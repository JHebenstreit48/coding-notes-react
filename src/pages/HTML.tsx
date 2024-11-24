import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const HTML = () => {
    const markdownFilePath = "/HTMLNotes/HTMLNotes.md";

    return (

        <>
        <Header text="HTML" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default HTML;
