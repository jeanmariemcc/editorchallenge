import { Link, routes } from '@redwoodjs/router'

import DocVersions from 'src/components/DocVersion/DocVersions'

export const QUERY = gql`
  query FindDocVersions {
    docVersions {
      id
      projFileId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No docVersions yet. '}
      <Link to={routes.newDocVersion()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ docVersions }) => {
  return <DocVersions docVersions={docVersions} />
}
