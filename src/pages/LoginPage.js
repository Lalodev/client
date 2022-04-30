import { useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

const userCredencials = {};

const LoginPage = () => {
  const location = useLocation();
  console.log(location);

  const { login } = useAuth();

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={() => login(userCredencials, location.state?.from)}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
