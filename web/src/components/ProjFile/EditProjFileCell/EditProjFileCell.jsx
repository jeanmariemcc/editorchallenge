import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProjFileForm from 'src/components/ProjFile/ProjFileForm'

export const QUERY = gql`
  query EditProjFileById($id: Int!) {
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
const UPDATE_PROJ_FILE_MUTATION = gql`
  mutation UpdateProjFileMutation($id: Int!, $input: UpdateProjFileInput!) {
    updateProjFile(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ projFile }) => {
  const [updateProjFile, { loading, error }] = useMutation(
    UPDATE_PROJ_FILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProjFile updated')
        navigate(routes.projFiles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateProjFile({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProjFile {projFile?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProjFileForm
          projFile={projFile}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
