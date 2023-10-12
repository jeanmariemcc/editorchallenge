// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Projects" titleTo="projects" buttonLabel="New Project" buttonTo="newProject">
        <Route path="/projects/new" page={ProjectNewProjectPage} name="newProject" />
        <Route path="/projects/{id:Int}/edit" page={ProjectEditProjectPage} name="editProject" />
        <Route path="/projects/{id:Int}" page={ProjectProjectPage} name="project" />
        <Route path="/projects" page={ProjectProjectsPage} name="projects" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/register" page={RegisterPage} name="register" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      <Route path="/project/new" page={NewProjectPage} name="newProject" />
      <Route path="/project/{id}/edit" page={EditProjectPage} name="editProject" />
      <Route path="/project/{id}" page={ProjectPage} name="project" />
      <Route path="/doc/{id}" page={CodeDocPage} name="codeDoc" />
      <Route path="/doc/{id}/versions" page={VersionsPage} name="versions" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
