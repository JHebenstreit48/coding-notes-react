import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";

const ReactFullStack = () => {
    const markdownFilePath = '../public/ReactFullStackNotes/ReactFullStackNotes.md';

    return (

        <>
            <h1 className="Header">React Full-Stack</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default ReactFullStack;
