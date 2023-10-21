import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DocVersionForm from 'src/components/DocVersion/DocVersionForm'

const CREATE_DOC_VERSION_MUTATION = gql`
  mutation CreateDocVersionMutation($input: CreateDocVersionInput!) {
    createDocVersion(input: $input) {
      id
    }
  }
`

const NewDocVersion = () => {
  const [createDocVersion, { loading, error }] = useMutation(
    CREATE_DOC_VERSION_MUTATION,
    {
      onCompleted: () => {
        toast.success('DocVersion created')
        navigate(routes.docVersions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createDocVersion({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New DocVersion</h2>
      </header>
      <div className="rw-segment-main">
        <DocVersionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDocVersion
