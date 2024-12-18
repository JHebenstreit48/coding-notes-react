import Header from "../Components/Header";
import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const GraphQL = () => {
    const markdownFilePath = '/GraphQLNotes/GraphQL.md';

    return (

        <>
           <Header text="GraphQL" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default GraphQL;
