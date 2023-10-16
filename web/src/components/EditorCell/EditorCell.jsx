// export const QUERY = gql`
//   query FindEditorQuery($id: Int!) {
//     editor: editor(id: $id) {
//       id
//     }
//   }
// `

// export const Loading = () => <div>Loading...</div>

// export const Empty = () => <div>Empty</div>

// export const Failure = ({ error }) => (
//   <div style={{ color: 'red' }}>Error: {error?.message}</div>
// )

// export const Success = ({ editor }) => {
//   return <div>{JSON.stringify(editor)}</div>
// }

// =====================================
//    from jm-front2

// import { schema } from 'src/api/db'

// export const editor = () => {
//   return schema.editor.findMany()
// }

// export const Loading = () => <div>Loading...</div>

// export const Empty = () => <div>Empty</div>

// export const Failure = ({ error }) => (
//   <div style={{ color: 'red' }}>Error: {error?.message}</div>
// )

// export const Success = ({ editor }) => {
//   return <div>{JSON.stringify(editor)}</div>
// }
