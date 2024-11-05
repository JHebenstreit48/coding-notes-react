import PageSetup from "../Components/PageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const DeploymentCICD = () => {
    const markdownFilePath = './DeploymentCICD/DeploymentCICDNotes.md';

    return (

        <>
        
            <h1 className="Header">Deployment CI/CD</h1>
            <Navigation />
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default DeploymentCICD;
