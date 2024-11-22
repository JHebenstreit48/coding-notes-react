import PageSetup from "../Components/PageSetup";
import "../CSS/Header.css";

const DeploymentCICD = () => {
    const markdownFilePath = '/DeploymentCICD/DeploymentCICDNotes.md';

    return (

        <>
        
            <h1 className="Header">Deployment CI/CD</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default DeploymentCICD;
