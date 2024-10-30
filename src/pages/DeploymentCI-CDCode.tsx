import CodePageSetup from "../Components/CodePageSetup";
import Navigation from "../Components/Navigation";
import "../CSS/Header.css";

const DeploymentCICDCode = () => {
    const markdownFilePath = '/src/DeploymentCICD/DeploymentCICDNotesWithCode.md';

    return (

        <>

            <h1 className="Header">Deployment CI-CD Code</h1>
            <Navigation />
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default DeploymentCICDCode;
