import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PROJ_FILE_MUTATION = gql`
  mutation DeleteProjFileMutation($id: Int!) {
    deleteProjFile(id: $id) {
      id
    }
  }
`

const ProjFile = ({ projFile }) => {
  const [deleteProjFile] = useMutation(DELETE_PROJ_FILE_MUTATION, {
    onCompleted: () => {
      toast.success('ProjFile deleted')
      navigate(routes.projFiles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete projFile ' + id + '?')) {
      deleteProjFile({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProjFile {projFile.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{projFile.id}</td>
            </tr>
            <tr>
              <th>Filename</th>
              <td>{projFile.filename}</td>
            </tr>
            <tr>
              <th>Language</th>
              <td>{projFile.language}</td>
            </tr>
            <tr>
              <th>Content</th>
              <td>{projFile.content}</td>
            </tr>
            <tr>
              <th>Project id</th>
              <td>{projFile.projectId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(projFile.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(projFile.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProjFile({ id: projFile.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(projFile.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProjFile
