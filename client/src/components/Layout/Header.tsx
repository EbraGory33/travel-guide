import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Search from "../Search";
import { logout } from "../../services/authAPI";

export default function Header() {
  const { user, isLoggedIn } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  console.log("User: ", user);
  const Logout = async () => {
    await logout(dispatch);
    navigate("/");
  };

  return (
    <>
      <header className="border-b border-solid border-[#868686]">
        <div className="header-container">
          <section className="header-sections">
            <div className="header-sections-content">
              <Link className="header-main" to="/home">
                <img src="/Logo.png" alt="" height={50} width={50} />
                <>Foot Notes</>
              </Link>
              <Link className="header-links" to="/home">
                Home
              </Link>
              <Link className="header-links" to="/Explorer">
                Places
              </Link>
              <Link className="header-links" to="/">
                Travel Guide
              </Link>
            </div>
          </section>
          <section className="header-sections ">
            <div className="header-sections-content">
              <div className="header-input">
                <Search />
              </div>
              <div className="dropdown"></div>
              {isLoggedIn ? (
                <>
                  {/* Notification bell */}
                  {/* User Profile */}
                  <p>{user?.firstName}</p>
                  <button className="btn-primary" onClick={Logout}>
                    Logout
                  </button>
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
