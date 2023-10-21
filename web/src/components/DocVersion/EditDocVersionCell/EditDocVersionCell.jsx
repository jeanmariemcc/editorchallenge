import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DocVersionForm from 'src/components/DocVersion/DocVersionForm'

export const QUERY = gql`
  query EditDocVersionById($id: Int!) {
    docVersion: docVersion(id: $id) {
      id
      projFileId
      createdAt
    }
  }
`
const UPDATE_DOC_VERSION_MUTATION = gql`
  mutation UpdateDocVersionMutation($id: Int!, $input: UpdateDocVersionInput!) {
    updateDocVersion(id: $id, input: $input) {
      id
      projFileId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ docVersion }) => {
  const [updateDocVersion, { loading, error }] = useMutation(
    UPDATE_DOC_VERSION_MUTATION,
    {
      onCompleted: () => {
        toast.success('DocVersion updated')
        navigate(routes.docVersions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateDocVersion({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit DocVersion {docVersion?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DocVersionForm
          docVersion={docVersion}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
