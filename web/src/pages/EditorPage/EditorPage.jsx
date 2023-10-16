// web/src/pages/EditorPage.js

import React from 'react'

import Editor from 'src/components/Editor'
// import { Loading, Empty, Failure, Success } from 'src/components/EditorCell'
// import { EditorCell } from 'src/components/EditorCell'

const EditorPage = () => {
  return (
    <div>
      <h1>Editor Page</h1>
      <Editor />
      {/* <EditorCell>
        <Loading />
        <Empty />
        <Failure />
        <Success />
      </EditorCell> */}
    </div>
  )
}

export default EditorPage
