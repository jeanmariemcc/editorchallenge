// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Private unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="DocVersions" titleTo="docVersions" buttonLabel="New DocVersion" buttonTo="newDocVersion">
          <Route path="/doc-versions/new" page={DocVersionNewDocVersionPage} name="newDocVersion" />
          <Route path="/doc-versions/{id:Int}/edit" page={DocVersionEditDocVersionPage} name="editDocVersion" />
          <Route path="/doc-versions/{id:Int}" page={DocVersionDocVersionPage} name="docVersion" />
          <Route path="/doc-versions" page={DocVersionDocVersionsPage} name="docVersions" />
        </Set>
      </Private>
      <Private unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="ProjFiles" titleTo="projFiles" buttonLabel="New ProjFile" buttonTo="newProjFile">
          <Route path="/proj-files/new" page={ProjFileNewProjFilePage} name="newProjFile" />
          <Route path="/proj-files/{id:Int}/edit" page={ProjFileEditProjFilePage} name="editProjFile" />
          <Route path="/proj-files/{id:Int}" page={ProjFileProjFilePage} name="projFile" />
          <Route path="/proj-files" page={ProjFileProjFilesPage} name="projFiles" />
        </Set>
      </Private>
      <Private unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="Profiles" titleTo="profiles" buttonLabel="New Profile" buttonTo="newProfile">
          <Route path="/profiles/new" page={ProfileNewProfilePage} name="newProfile" />
          <Route path="/profiles/{id:Int}/edit" page={ProfileEditProfilePage} name="editProfile" />
          <Route path="/profiles/{id:Int}" page={ProfileProfilePage} name="profile" />
          <Route path="/profiles" page={ProfileProfilesPage} name="profiles" />
        </Set>
      </Private>
      <Private unauthenticated="home">
        <Route path="/editor" page={EditorPage} name="editor" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/profile" page={ProfilePage} name="profile" />
      </Private>
      <Route path="/register" page={RegisterPage} name="register" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/home" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
