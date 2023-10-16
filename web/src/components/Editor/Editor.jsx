// web/src/components/MonacoEditor.js

import React, { useState, useRef } from 'react'

// after yarn add @monaco-editor/react
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'
import { MonacoBinding } from 'y-monaco'
import { WebrtcProvider } from 'y-webrtc'
import * as Y from 'yjs'

const EditorComponent = () => {
  const editorRef = useRef(null)
  // const handleEditorChange = (newCode) => {
  //   setCode(newCode)
  // }
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor
    // Initialize YJS
    const doc = new Y.Doc() // a collection of shared objects
    // Connect to peers (or start connection) with WebRTC
    const provider = new WebrtcProvider('test-room', doc)

    const type = doc.getText('monaco') // monaco is just a name I chose
    // e.g. imagine doc contains the following key value pair
    //{ "monaco": "text our IDE is showing" }

    // Bind YJS to Monaco
    const binding = new MonacoBinding(
      type,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness
    )
    console.log(provider.awareness)
    // This is a bit tricky, it is relying on a bunch of pre-written code
    // first, we're going to put in the type parameter. This shows the
    // text that we want Monaco to be binded to. So what text fo value do we want to show.
    // We want to show the doc.getText("monaco") in the previous line. Becaue that text
    // is what's being shared among all the different clients.
    // We need to get model using editorRef.current.getModel()
    // This is a Monaco specific thing in models. It allows it to see the changes that are
    // happening within Monaco.
    // Some syntax specific t how yjs wants us to set this up, is we can say "new Set"
    // and pass it in an array. The only thing we need in this array is the current reference
    // to the editor.
    // the next param makes Monaco aware of what our webrtc provider is. This allows
    // the Monaco binding to connect everything to the WebrtcProvider identified in the const provider.
  }

  return (
    <div>
      <Editor
        width="100vw"
        height="100vh"
        language="javascript"
        theme="vs-dark"
        onMount={handleEditorDidMount}
        // value={code}
        // onChange={handleEditorChange}
      />
    </div>
  )
}

export default EditorComponent
