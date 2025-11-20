import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isUser, setIsUser] = useState(null);
  setIsUser(null);
  return (
    <>
      <header className=" bg-gray-700">
        <Link className="flex items-center" to="/">
          <img src="./Logo.png" alt="" height={50} width={50} />
          <>The Tourism</>
        </Link>
        {isUser ? (
          <section>
            <input type="text" placeholder="Enter place" />
            {/* Notification bell */}
            {/* User Profile */}
          </section>
        ) : (
          <section>
            <Link to="/Login">Login </Link>
            <Link to="/Register">SignUp</Link>
          </section>
        )}
      </header>
    </>
  );
}
