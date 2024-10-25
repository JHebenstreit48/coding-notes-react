import ReactMarkdown from 'react-markdown';
import '../CSS/Card.css';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeHighlight from 'rehype-highlight';

interface PageSetupCodeProps {
    markdownContentCode?: string;
}


const PageSetupCode = ({ markdownContentCode }: PageSetupCodeProps) => {
    return (
        <>
            <div className="card">
                <h2 className="card-header">Notes With Code</h2>
                <div className="markdownContentCode">
                    <ReactMarkdown
                        children={markdownContentCode}
                        rehypePlugins={[rehypeHighlight, rehypeRaw]}
                        components={{
                            code({ className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');

                                if (match && match[1]) {
                                    return (
                                        <SyntaxHighlighter
                                            language={match[1]}
                                            style={atomDark} // Applying the dark theme
                                            PreTag="div"
                                            className="code"
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    );
                                }

                                return null;
                            },
                        }}

                    />
                </div>

            </div>
        </>
    );
};

export default PageSetupCode;
