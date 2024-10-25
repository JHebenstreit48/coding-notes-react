import ReactMarkdown from 'react-markdown';
import '../CSS/Card.css';
import rehypeRaw from 'rehype-raw';

interface PageSetupProps {
  markdownContent?: string;
}


const PageSetup = ({ markdownContent }: PageSetupProps) => {
  return (
    <>
      <div className="card">
        <h2 className="card-header">Notes</h2>
        <div className="markdownContainer">
          <ReactMarkdown
            className="markdownContent"
            children={markdownContent}
            rehypePlugins={[rehypeRaw]}
          />
        </div>

      </div>
    </>
  );
};


export default PageSetup;
