import ReactMarkdown from 'react-markdown';
import '../CSS/Card.css';
import rehypeRaw from 'rehype-raw';

interface PageSetupProps {
  markdownContent?: string;
}


const PageSetup = ({markdownContent }: PageSetupProps) => {
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

// export const DynamicNotesCode = (props: DynamicNotesPropsCode) => {
//   return (
//     <>
//       <div className="card-code">
//         <h2 className="card-header">Notes with Code</h2>
//         <div>
//           <ul className="notesList">
//             {props.items.map((item, index) => (
//               <li className="list-items-code" key={index}>
//                 {item.content.map((part, idx) =>
//                   part.emphasis ? (
//                     part.emphasis2 ? ( <span key={idx} className="emphasis2">
//                       {part.text}{" "}
//                     </span>
//                       ) : (
//                     <span key={idx} className="emphasis">
//                       {part.text}{" "}
//                     </span>
//                       )
//                   ) : (
//                     part.code ? <li className="list-code"><code className="code">{part.text}</code></li> :
//                       <span key={idx}>{part.text} </span>
//                   )

//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };



export default PageSetup;


{/* <ul className="notesList">
            {props.items.map((item, index) => (
              <li className="list-items" key={index}>
                {item.content.map((part, idx) =>
                   part.emphasis ? (
                    part.emphasis2 ? ( <span key={idx} className="emphasis2">
                      {part.text}{" "}
                    </span>
                      ) : (
                    <span key={idx} className="emphasis">
                      {part.text}{" "}
                    </span>
                      )
                  ) : (
                    <span key={idx}>{part.text} </span>
                  )

                )}
              </li>
            ))}
          </ul> */}
