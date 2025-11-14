import React from 'react';
import McText from '../McText.jsx'; // Make sure the path is correct

export default {
    title: 'Components/McText',
    component: McText,
};

// export const FromJson = {
//     render: (args) => {
//         const childrenJson = {
//             text: '',
//             extra: [
//                 { color: 'dark_red', text: 'Wirtschafts-Server mit RPG und klarem Konzept ' },
//                 { color: 'green', text: '| ' },
//                 { color: 'dark_red', text: 'SKY-Server ' },
//                 { color: 'green', text: '| ' },
//                 { color: 'dark_red', text: 'Minigames ' },
//                 { color: 'green', text: '| ' },
//                 { color: 'dark_red', text: 'Creative ' },
//                 { color: 'green', text: '| ' },
//                 { color: 'red', text: 'Community von 8 - 66 Jahren ' },
//                 { color: 'green', text: '| ' },
//                 { color: 'dark_red', text: 'Aktive Admins' }
//             ]
//         }
//         return <McText {...args}>{childrenJson}</McText>;
//     }
// };

export const FromString = {
    args: {
        children: '§4This is red text §9and this is blue!'
    }
};

export const FromJsonWithObfuscatedText = {
    render: (args) => <McText {...args} />,
    args: {
        children: {
            text: '',
            extra: [
                {"color": "red", "text": "Hello "},
                {"color": "dark_red", "obfuscated": true, "bold": true, "text": "Wirtschafts-Server mit RPG und klarem Konzept "},
            ]
        }
    },
    parameters: {
        docs: {
            source: {
                code: `<McText>
  {{
    text: '',
    extra: [
      { color: 'red', text: 'Hello ' },
      { color: 'dark_red', obfuscated: true, bold: true, text: 'Wirtschafts-Server mit RPG und klarem Konzept ' }
    ]
  }}
</McText>`,
            }
        }
    }
};

//
// export const FromJsonWithObfuscatedText = () => (
// <McText>
//   {{
//     text: '',
//     extra: [
//       { color: 'dark_red', obfuscated: true, text: 'Wirtschafts-Server mit RPG und klarem Konzept' },
//       { color: 'green', text: ' | ' },
//       { color: 'dark_red', text: 'SKY-Server ' },
//       { color: 'green', text: '| ' },
//       { color: 'dark_red', text: 'Minigames ' },
//       { color: 'green', text: '| ' },
//       { color: 'dark_red', text: 'Creative ' },
//       { color: 'green', text: '| ' },
//       { color: 'red', text: 'Community von 8 - 66 Jahren ' },
//       { color: 'green', text: '| ' },
//       { color: 'dark_red', text: 'Aktive Admins' }
//     ]
//   }}
// </McText>
// );
//
// export const FromJsonWithStringExtraValues = () => (
// <McText>
//   {{ text: 'This ', extra: ['works ', { color: 'red', text: 'great!' }] }}
// </McText>
// );
//
// export const FromString = () => (
// <McText>
//   {'§4This is red and this is §ksecret§r and §lbold. Note that §9color codes reset format codes, as you §ocan see.'}
// </McText>
// );
//
// export const FromStringWithPrefix = () => (
// <McText prefix={'&'}>
//   {'&4This is red and this is &ksecret&r and &lbold. Note that &9color codes reset format codes, as you &ocan see.'}
// </McText>
// );
