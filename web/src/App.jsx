import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AuthProvider, useAuth } from './auth'

import './scaffold.css'
import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <RedwoodApolloProvider useAuth={useAuth}>
          <Routes />
        </RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)
// Add the function below to the web / src / App.js file, after the import statements, when the languages are defined

// const ALLOWED_LANGUAGES = [
//   "ANGULAR", "C", "CPLUS", /* ... other languages ... */, "OTHERS"
// ]

// if (ALLOWED_LANGUAGES.includes(inputLanguage)) {
//   // Proceed with insert/update
// } else {
//   // Handle invalid language value
// }

export default App
