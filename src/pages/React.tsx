import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const React = () => {
    const markdownFilePath = '/ReactNotes/ReactNotes.md';

    return (

        <>
            <Header text="React" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default React;
