interface ListItem {
    content: TextPart[];
  }
  
  interface TextPart {
    text: string;
    emphasis?: boolean;
  }
  
  interface DynamicNotesCodeProps {
    items: ListItem[];
  }
  
  const DynamicNotesCode = (props: DynamicNotesCodeProps) => {
    return (
      <>
        <div className="codeCard">
          <h2 id="card-header">Code Examples</h2>
          <div>
            <ul className="notesList">
              {props.items.map((item, index) => (
                <li className="list-items" key={index}>
                  {item.content.map((part, idx) =>
                    part.emphasis ? (
                      <span key={idx} className="emphasis">
                        {part.text}{" "}
                      </span>
                    ) : (
                      <span key={idx}>{part.text} </span>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default DynamicNotesCode;
  