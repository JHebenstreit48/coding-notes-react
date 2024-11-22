import CodePageSetup from "../Components/CodePageSetup";
import "../CSS/Header.css";

const DeploymentCICDCode = () => {
    const markdownFilePath = '/DeploymentCICD/DeploymentCICDNotesWithCode.md';

    return (

        <>

            <h1 className="Header">Deployment CI-CD Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default DeploymentCICDCode;
