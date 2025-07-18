// import { $getRoot, $getSelection } from 'lexical';
// import { useEffect } from 'react';

import { useRef } from "react";

// import { LexicalComposer } from '@lexical/react/LexicalComposer';
// import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
// import { ContentEditable } from '@lexical/react/LexicalContentEditable';
// import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
// import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
// import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

// const theme = {
//     // Theme styling goes here
// }

// // Lexical React plugins are React components, which makes them
// // highly composable. Furthermore, you can lazy load plugins if
// // desired, so you don't pay the cost for plugins until you
// // actually use them.
// function MyCustomAutoFocusPlugin() {
//     const [editor] = useLexicalComposerContext();

//     useEffect(() => {
//         // Focus the editor when the effect fires!
//         editor.focus();
//     }, [editor]);

//     return null;
// }

// // Catch any errors that occur during Lexical updates and log them
// // or throw them as needed. If you don't throw them, Lexical will
// // try to recover gracefully without losing user data.
// function onError(error: any) {
//     console.error(error);
// }

// function Editor() {
//     const initialConfig = {
//         namespace: 'MyEditor',
//         theme,
//         onError,
//     };

//     return (
//         <LexicalComposer initialConfig={initialConfig}>
//             <PlainTextPlugin
//                 contentEditable={<ContentEditable />}
//                 placeholder={<div>Enter some text...</div>}
//                 ErrorBoundary={LexicalErrorBoundary}
//             />
//             <HistoryPlugin />
//             <MyCustomAutoFocusPlugin />
//         </LexicalComposer>
//     );
// }

const Editor: React.FC = (): JSX.Element => {
    const notings = useRef<HTMLTextAreaElement>(null);
    const getdata = () => {
        console.log(notings.current?.value.replace(/\n/g, "\\n"))
    }
    return (
        <>
            <textarea
                ref={notings}
                className="w-80 h-28 bg-[#eeeeee] rounded-md m-4 border-2 border-gray-500 outline-none"
            ></textarea>
            <button onClick={getdata}>text</button>
        </>
    );
}

export default Editor;