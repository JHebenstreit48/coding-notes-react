import "../CSS/Header.css";
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const Redux = () => {
    const markdownFilePath = '/ReduxNotes/Redux.md';

    return (

        <>
            <Header text="Redux" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Redux;
