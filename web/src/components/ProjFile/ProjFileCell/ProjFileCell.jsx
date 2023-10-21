import ProjFile from 'src/components/ProjFile/ProjFile'

export const QUERY = gql`
  query FindProjFileById($id: Int!) {
    projFile: projFile(id: $id) {
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

export const Empty = () => <div>ProjFile not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ projFile }) => {
  return <ProjFile projFile={projFile} />
}
