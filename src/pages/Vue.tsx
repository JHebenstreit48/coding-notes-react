import "../CSS/Header.css";
import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const Vue = () => {
    const markdownFilePath = '/VueNotes/Vue.md';

    return (

        <>
            <Header text="Vue" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );

};

export default Vue;
