import DocVersion from 'src/components/DocVersion/DocVersion'

export const QUERY = gql`
  query FindDocVersionById($id: Int!) {
    docVersion: docVersion(id: $id) {
      id
      projFileId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>DocVersion not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ docVersion }) => {
  return <DocVersion docVersion={docVersion} />
}
