import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/DocVersion/DocVersionsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_DOC_VERSION_MUTATION = gql`
  mutation DeleteDocVersionMutation($id: Int!) {
    deleteDocVersion(id: $id) {
      id
    }
  }
`

const DocVersionsList = ({ docVersions }) => {
  const [deleteDocVersion] = useMutation(DELETE_DOC_VERSION_MUTATION, {
    onCompleted: () => {
      toast.success('DocVersion deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete docVersion ' + id + '?')) {
      deleteDocVersion({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Proj file id</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {docVersions.map((docVersion) => (
            <tr key={docVersion.id}>
              <td>{truncate(docVersion.id)}</td>
              <td>{truncate(docVersion.projFileId)}</td>
              <td>{timeTag(docVersion.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.docVersion({ id: docVersion.id })}
                    title={'Show docVersion ' + docVersion.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDocVersion({ id: docVersion.id })}
                    title={'Edit docVersion ' + docVersion.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete docVersion ' + docVersion.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(docVersion.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DocVersionsList
