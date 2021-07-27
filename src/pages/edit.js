import * as React from "react"
import {useState, useRef, useEffect} from "react"
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import '../styles/editorStyle.css'

import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const percentage = 66;



const Edit = () => {
    const [value, setValue] = useState([
        {
        type: "paragraph",
        children: [{ text: "We have some base content." }]
        }
    ]);

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
      );

  return (
    <html lang="en">
          {/* <div class="editor-parent" style={{ width: 1200, height: 600 }}>
            <div ref={quillRef} />
            </div> */}


      <Editor editorState={editorState} onChange={setEditorState} />
    </html>
  )
}

export default Edit
