import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Header } from "./components/Layout";
import { Login, Register, Landing } from "./pages";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

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
            <Route path="/home" element={<p>You are home</p>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
}
