import PageSetup from "../Components/PageSetup";

const React = () => {
    const markdownFilePath = '/ReactNotes/ReactNotes.md';

    return (

        <>
            <h1 className="Header">React</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default React;
