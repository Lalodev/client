import ProjectsPage from "../pages/ProjectsPage";
import RegisterPage from "../pages/RegisterPage";

const routes = {
  home: "/",
  login: "/login",
  register: "/register",
  account: "/account",
  projects: "/projects",
  project: (projectId) =>
    projectId ? `/project/:${projectId}` : "/projects/:projectId",
  admin: {
    users: "/admin/users",
  },
};

export default routes;
