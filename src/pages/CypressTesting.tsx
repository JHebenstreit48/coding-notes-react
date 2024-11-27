import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";

const Cypress = () => {
    const markdownFilePath = '/CypressTesting/CypressTesting.md';

    return (

        <>
            <Header text="Cypress" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default Cypress;