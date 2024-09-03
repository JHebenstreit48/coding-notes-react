interface ListItem {
  content: TextPart[];
}

interface TextPart {
  text: string;
  emphasis?: boolean;
}

interface DynamicNotesProps {
  items: ListItem[];
}

const DynamicNotes = (props: DynamicNotesProps) => {
  return (
    <>
      <div className="card">
        <h2 id="card-header">Notes without Code</h2>
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

export default DynamicNotes;
