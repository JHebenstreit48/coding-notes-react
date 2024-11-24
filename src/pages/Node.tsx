import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const Node = () => {
    const markdownFilePath = '/NodeNotes/NodeNotes.md';

    return (

        <>
             <Header text="Node JS" />
            <PageSetup 
            filePath={markdownFilePath}
            markdownContent="markdownContent
            "/>
        </>
    );

};

export default Node;
