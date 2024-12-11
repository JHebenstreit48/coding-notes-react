import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";


const Markdown = () => {
    const markdownFilePath = "/MarkdownNotes/Markdown.md";

    return (

        <>
        <Header text="Markdown" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

}

export default Markdown;
