import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";
import routes from "../helpers/routes";

const PublicRoute = (props) => {
  //const user = null;
  //const user = { id: 1, role: "regular" };
  //const { user } = useAuth();
  const { isLogged } = useAuth();

  if (isLogged()) return <Redirect to={routes.projects} />;

  return <Route {...props} />;
};

export default PublicRoute;
