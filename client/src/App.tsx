import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Layout";
// import { Login, Register, Landing, Explorer } from "./pages";
import {
  Login,
  Register,
  Explorer,
  ExplorerSearch,
  Home,
  Landing,
} from "./pages";
import { useAppDispatch } from "./app/hooks";
// import { logout, verify } from "./services/authAPI";
import { verify } from "./services/authAPI";

function Layout() {
  const location = useLocation();
  const hideHeader = ["/login", "/register"].includes(
    location.pathname.toLowerCase()
  );
  return (
    <>
      <div className="flex flex-col h-full w-full">
        {!hideHeader && <Header />}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />

            <Route path="/home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Explorer" element={<ExplorerSearch />} />
            <Route path="/Explorer/:id" element={<Explorer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initializeUser = async () => {
      setLoading(true);
      await verify(dispatch);

      setLoading(false);
    };

    initializeUser();
  }, [dispatch]);
  if (loading) return;
  return (
    <Router>
      <Layout />
    </Router>
  );
}
