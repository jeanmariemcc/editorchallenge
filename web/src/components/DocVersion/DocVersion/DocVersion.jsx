import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_DOC_VERSION_MUTATION = gql`
  mutation DeleteDocVersionMutation($id: Int!) {
    deleteDocVersion(id: $id) {
      id
    }
  }
`

const DocVersion = ({ docVersion }) => {
  const [deleteDocVersion] = useMutation(DELETE_DOC_VERSION_MUTATION, {
    onCompleted: () => {
      toast.success('DocVersion deleted')
      navigate(routes.docVersions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete docVersion ' + id + '?')) {
      deleteDocVersion({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            DocVersion {docVersion.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{docVersion.id}</td>
            </tr>
            <tr>
              <th>Proj file id</th>
              <td>{docVersion.projFileId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(docVersion.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDocVersion({ id: docVersion.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(docVersion.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default DocVersion
