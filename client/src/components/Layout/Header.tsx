import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

export default function Header() {
  const { user, isLoggedIn } = useAppSelector((state) => state.user);
  return (
    <>
      <header className="border-b border-solid border-[#868686]">
        <div className="header-container">
          <section className="header-sections">
            <div className="header-sections-content">
              <Link className="header-main" to="/home">
                <img src="./Logo.png" alt="" height={50} width={50} />
                <>Foot Notes</>
              </Link>
              <Link className="header-links" to="/home">
                Home
              </Link>
              <Link className="header-links" to="/">
                Travel guides
              </Link>
              <Link className="header-links" to="/">
                Hotels
              </Link>
            </div>
          </section>
          <section className="header-sections ">
            <div className="header-sections-content">
              <div className="header-input">
                <img
                  className="search-icon"
                  src="./search.svg"
                  alt="Search Icon"
                  height={24}
                  width={24}
                />
                {/* TODO: make Input field functional */}
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter place"
                />
              </div>
              {isLoggedIn ? (
                <>
                  {/* Notification bell */}
                  {/* User Profile */}
                  <>{user}</>
                </>
              ) : (
                <>
                  <Link className="header-links" to="/Login">
                    Login
                  </Link>
                  <Link className="header-links" to="/Register">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
