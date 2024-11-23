import PageSetup from "../Components/PageSetup";

const DeploymentCICD = () => {
    const markdownFilePath = '/DeploymentCICD/DeploymentCICDNotes.md';

    return (

        <>
        
            <h1 className="Header">CD/CD Ops</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />

        </>
    );

};

export default DeploymentCICD;
