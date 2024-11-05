import Navigation from "../Components/Navigation";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const React = () => {
    const markdownFilePath = './ReactNotes/ReactNotes.md';

    return (

        <>
            <h1 className="Header">React</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default React;
