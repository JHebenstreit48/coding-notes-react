// import '../CSS/HTMLNotes.css';
// import React from 'react';

// // Define the types for each text part and for the list item
// interface TextPart {
//   text: string;
//   emphasis: boolean;
// }

// interface ListItem {
//   content: TextPart[];
// }

// // Define the functional component with TypeScript and use the default export function syntax
// const HTMLNotes: React.FC = () => {
//   // Define the list items with dynamic content
//   const items: ListItem[] = [
//     {
//       content: [
//         { text: 'Hypertext Markup Language (HTML)', emphasis: true },
//         { text: 'is one of the three cornerstone languages.', emphasis: false },
//       ],
//     },
//     {
//       content: [
//         { text: 'HTML', emphasis: true },
//         { text: 'is used to create the', emphasis: false },
//         { text: 'structure', emphasis: true },
//         { text: 'of a webpage.', emphasis: false },
//       ],
//     },
//     {
//       content: [
//         { text: 'It is made up of', emphasis: false },
//         { text: 'elements', emphasis: true },
//         { text: 'which work together to provide content and the basic framework for all pages on the web.', emphasis: false },
//       ],
//     },
//   ];

//   return (
//     <div>
//       {items.map((item, index) => (
//         <p key={index}>
//           {item.content.map((part, partIndex) => (
//             <span key={partIndex} style={{ fontWeight: part.emphasis ? 'bold' : 'normal' }}>
//               {part.text}
//             </span>
//           ))}
//         </p>
//       ))}
//     </div>
//   );
// };

// export default HTMLNotes;