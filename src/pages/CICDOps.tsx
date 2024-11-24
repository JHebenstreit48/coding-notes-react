import PageSetup from "../Components/PageSetup";
import Header from "../Components/Header";

const CICDOps = () => {
    const markdownFilePath = '/DeploymentCICD/CICDOps.md';

    return (

        <>
        
            <Header text="CICD Ops" />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default CICDOps;
