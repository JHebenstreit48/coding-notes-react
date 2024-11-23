import CodePageSetup from "../Components/CodePageSetup";

const DeploymentCICDCode = () => {
    const markdownFilePath = '/DeploymentCICD/DeploymentCICDNotesWithCode.md';

    return (

        <>

            <h1 className="Header">CI/CD Ops Code</h1>
            <CodePageSetup
                filePath={markdownFilePath}
                markdownContentCode="markdownContentCode"
            />

        </>

    );
};

export default DeploymentCICDCode;
