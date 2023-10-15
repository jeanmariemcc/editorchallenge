import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProjFile/ProjFilesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_PROJ_FILE_MUTATION = gql`
  mutation DeleteProjFileMutation($id: Int!) {
    deleteProjFile(id: $id) {
      id
    }
  }
`

const ProjFilesList = ({ projFiles }) => {
  const [deleteProjFile] = useMutation(DELETE_PROJ_FILE_MUTATION, {
    onCompleted: () => {
      toast.success('ProjFile deleted')
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
    if (confirm('Are you sure you want to delete projFile ' + id + '?')) {
      deleteProjFile({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Filename</th>
            <th>Language</th>
            <th>Content</th>
            <th>Project id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {projFiles.map((projFile) => (
            <tr key={projFile.id}>
              <td>{truncate(projFile.id)}</td>
              <td>{truncate(projFile.filename)}</td>
              <td>{truncate(projFile.language)}</td>
              <td>{truncate(projFile.content)}</td>
              <td>{truncate(projFile.projectId)}</td>
              <td>{timeTag(projFile.createdAt)}</td>
              <td>{timeTag(projFile.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.projFile({ id: projFile.id })}
                    title={'Show projFile ' + projFile.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProjFile({ id: projFile.id })}
                    title={'Edit projFile ' + projFile.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete projFile ' + projFile.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(projFile.id)}
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

export default ProjFilesList
