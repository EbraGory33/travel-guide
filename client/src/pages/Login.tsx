import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <p>You are on the Login Page</p>
      <Link to="/Register">
        <p>
          Don't have an account yet? <strong>Sign up</strong>
        </p>
      </Link>
      <Link to="/">Return Home</Link>
    </>
  );
}
