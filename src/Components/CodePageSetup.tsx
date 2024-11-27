import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../CSS/Notes.css';
import '../CSS/NotesWithCode.css'


interface CodePageSetupProps {
    filePath: string;
    markdownContentCode?: string;
}

// Function to load Markdown content
const loadMarkdown = async (filePath: string) => {
    const response = await fetch(filePath);
    return response.text();
};

// Customized theme to use dark gray background for HTML and CSS
const darkGrayBackgroundTheme = {
    ...materialLight,
    'pre[class*="language-"]': {
        ...materialLight['pre[class*="language-"]'],
        background: 'rgb(29, 31, 33)', // Set to dark gray background
        boxShadow: 'none',             // Remove drop shadow
        padding: '0',                  // Remove padding
    },
    'code[class*="language-"]': {
        ...materialLight['code[class*="language-"]'],
        background: 'rgb(29, 31, 33)', // Dark gray background for inline code
        boxShadow: 'none',             // Remove drop shadow
        padding: '0',
        color: '#fff',                 // Set text color for contrast
    }
};

const CodePageSetup: React.FC<CodePageSetupProps> = ({ filePath, markdownContentCode }) => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        if (filePath) {
            loadMarkdown(filePath).then((content) => setMarkdownContent(content));
        }
    }, [filePath]);

    // Function to dynamically select theme based on language
    const selectTheme = (language: string) => {
        switch (language) {
            case 'html':
            case 'css':
            case 'javascript':
            case 'react':
            case 'shell':
            case 'cypress':
            case 'python':
                return darkGrayBackgroundTheme;
            default:
                return darkGrayBackgroundTheme; // Fallback theme for other languages
        }
    };

    return (
        <div className="card">
            <h2 className="card-header">Notes With Code</h2>
            <div className={markdownContentCode ? markdownContentCode : "markdownContentCode"}>
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        code({ className, children, ...props }) {
                            const language = className ? className.replace('language-', '') : '';
                            return (
                                <SyntaxHighlighter
                                    style={selectTheme(language)} // Apply dynamic theme based on language
                                    language={language}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).trim()}
                                </SyntaxHighlighter>
                            );
                        },
                    }}
                >
                    {markdownContent || ''}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default CodePageSetup;
