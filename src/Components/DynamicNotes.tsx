import { ListItem } from '../Components/Types';

interface DynamicNotesProps {
  items: ListItem[];
}

interface DynamicNotesPropsCode {
  items: ListItem[];
}


const DynamicNotes = (props: DynamicNotesProps) => {
  return (
    <>
      <div className="card">
        <h2 className="card-header">Notes</h2>
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

export const DynamicNotesCode = (props: DynamicNotesPropsCode) => {
  return (
    <>
      <div className="card-code">
        <h2 className="card-header">Notes with Code</h2>
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
                    part.code ? <li className="list-code"><code className="code">{part.text}</code></li> :
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



export default DynamicNotes;
