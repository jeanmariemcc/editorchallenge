import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProjFileForm from 'src/components/ProjFile/ProjFileForm'

const CREATE_PROJ_FILE_MUTATION = gql`
  mutation CreateProjFileMutation($input: CreateProjFileInput!) {
    createProjFile(input: $input) {
      id
    }
  }
`

const NewProjFile = () => {
  const [createProjFile, { loading, error }] = useMutation(
    CREATE_PROJ_FILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProjFile created')
        navigate(routes.projFiles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createProjFile({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProjFile</h2>
      </header>
      <div className="rw-segment-main">
        <ProjFileForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProjFile
