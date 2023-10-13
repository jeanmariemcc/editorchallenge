import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EditorPage = () => {
  return (
    <>
      <MetaTags title="Editor" description="Editor page" />

      <h1>EditorPage</h1>
      <p>
        Find me in <code>./web/src/pages/EditorPage/EditorPage.jsx</code>
      </p>
      <p>
        My default route is named <code>editor</code>, link to me with `
        <Link to={routes.editor()}>Editor</Link>`
      </p>
    </>
  )
}

export default EditorPage
