import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Change theme as needed

interface CodePageSetupProps {
    filePath: string;
    markdownContentCode?: string;
}

// Function to load Markdown content
const loadMarkdown = async (filePath: string) => {
    const response = await fetch(filePath);
    return response.text();
};

const CodePageSetup: React.FC<CodePageSetupProps> = ({ filePath, markdownContentCode }) => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        if (filePath) {
            loadMarkdown(filePath).then((content) => setMarkdownContent(content));
        }
    }, [filePath]);

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
                                    style={oneDark}
                                    language={language}
                                    PreTag="div"
                                    {...props}>

                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            );
                        },
                    }}
                >
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default CodePageSetup;


// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import '../CSS/Card.css';

// interface CodePageSetupProps {
//     markdownContentCode?: string;
// }

// const CodePageSetup: React.FC<CodePageSetupProps> = ({ markdownContentCode }) => {
//     return (
//         <div className="card">
//             <h2 className="card-header">Notes With Code</h2>
//             <div className="markdownContentCode">
//                 <ReactMarkdown
//                     children={markdownContentCode || ''}
//                     rehypePlugins={[rehypeRaw]}
//                     components={{
//                         code({ className, children, ...props }) {
//                             const match = /language-(\w+)/.exec(className || '');

//                             if (match && match[1]) {
//                                 return (
//                                     <SyntaxHighlighter
//                                         language={match[1]}
//                                         style={atomDark} // Applying the dark theme
//                                         PreTag="div"
//                                         className="code"
//                                         {...props}
//                                     >
//                                         {String(children).replace(/\n$/, '')}
//                                     </SyntaxHighlighter>
//                                 );
//                             }

//                             return <code className={className} {...props}>{children}</code>;
//                         },
//                         span: ({ node, ...props }) => <span {...props} style={{ display: 'none' }} />, // Hide span tags
//                     }}
//                 />
//             </div>
//         </div>
//     );
// };

// export default CodePageSetup;


// import ReactMarkdown from 'react-markdown';
// import '../CSS/Card.css';
// import rehypeRaw from 'rehype-raw';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import rehypeHighlight from 'rehype-highlight';

// interface PageSetupCodeProps {
//     markdownContentCode?: string;
// }


// const PageSetupCode = ({ markdownContentCode }: PageSetupCodeProps) => {
//     return (
//         <>
//             <div className="card">
//                 <h2 className="card-header">Notes With Code</h2>
//                 <div className="markdownContentCode">
//                     <ReactMarkdown
//                         children={markdownContentCode}
//                         rehypePlugins={[rehypeHighlight, rehypeRaw]}
//                         components={{
//                             code({ className, children, ...props }) {
//                                 const match = /language-(\w+)/.exec(className || '');

//                                 if (match && match[1]) {
//                                     return (
//                                         <SyntaxHighlighter
//                                             language={match[1]}
//                                             style={atomDark} // Applying the dark theme
//                                             PreTag="div"
//                                             className="code"
//                                             {...props}
//                                         >
//                                             {String(children).replace(/\n$/, '')}
//                                         </SyntaxHighlighter>
//                                     );
//                                 }

//                                 return null;
//                             },
//                         }}

//                     />
//                 </div>

//             </div>
//         </>
//     );
// };

// export default PageSetupCode;
