import Navigation from "../Components/Navigation";
import "../CSS/Header.css";
import PageSetup from "../Components/PageSetup";
import deploymentNotesMkdn from "../DeploymentCICD/DeploymentCICDNotes";



export default function DeploymentCICD() {

    return (

        <>
        
            <h1 className="Header">Deployment CI/CD</h1>
            <Navigation />
            <PageSetup
                markdownContent={deploymentNotesMkdn}
            />

        </>
    );

}
