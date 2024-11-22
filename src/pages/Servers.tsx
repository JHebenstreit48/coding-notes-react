import PageSetup from "../Components/PageSetup";

const Servers = () => {
    const markdownFilePath = '/ServerNotes/ServerNotes.md';

    return (

        <>
            <h1 className="Header">Servers</h1>
            <PageSetup
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default Servers;
