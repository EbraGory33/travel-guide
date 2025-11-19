import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <p>You are on the SignUp Page</p>
      <Link to="/Login">
        <p>
          Already have and account? <strong>Log in</strong>
        </p>
      </Link>
      <Link to="/">Return Home</Link>
    </>
  );
}
