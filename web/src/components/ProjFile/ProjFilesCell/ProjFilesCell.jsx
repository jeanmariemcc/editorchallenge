import { Link, routes } from '@redwoodjs/router'

import ProjFiles from 'src/components/ProjFile/ProjFiles'

export const QUERY = gql`
  query FindProjFiles {
    projFiles {
      id
      filename
      language
      content
      projectId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No projFiles yet. '}
      <Link to={routes.newProjFile()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ projFiles }) => {
  return <ProjFiles projFiles={projFiles} />
}
