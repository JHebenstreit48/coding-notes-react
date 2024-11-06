import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import '../CSS/NotesCard.css';

interface PageSetupProps {
    filePath?: string;
    markdownContent?: string;
}

const loadMarkdown = async (filePath: string) => {
    const response = await fetch(filePath);
    return response.text();
};

const PageSetup: React.FC<PageSetupProps> = ({ filePath }) => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        if (filePath) {
            loadMarkdown(filePath).then((content) => setMarkdownContent(content));
        }
    }, [filePath]);

    return (
        <div className="card">
            <h2 className="card-header">Notes</h2>
            <div className="markdownContent">
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                         // Apply the codeSnip class to code snippets only
                    code(props) {
                        return <code className="codeSnip" {...props} />;
                    },
                    // Retain existing structure for emphasis and secondEmphasis classes
                    span(props) {
                        return <span {...props} />;
                    },
                }}
            >
                {markdownContent || ''}
            </ReactMarkdown>
        </div>
    </div>
    );
};

export default PageSetup;
