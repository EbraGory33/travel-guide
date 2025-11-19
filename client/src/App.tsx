import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Layout";
import { Login, Register } from "./pages";

function Layout() {
  const location = useLocation();
  const hideHeader = ["/login", "/register"].includes(
    location.pathname.toLowerCase()
  );
  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<p>The guide to your many stories</p>} />
        <Route path="/home" element={<p>You are home</p>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
