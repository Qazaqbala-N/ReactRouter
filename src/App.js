import Profile from "./components/Profile/Profile";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import { useState } from "react";
import Login from "./components/Login/Login";
import Friends from "./components/Friends/Friends";
import Alex from "./components/Friends/Alex/Alex";
import Martha from "./components/Friends/Martha/Martha";
import Jhon from "./components/Friends/Jhon/Jhon";
export default function App() {
  const [authed, setAuthed] = useState(false);
  return (
    <main>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/main" className="m-3 btn btn-chocolate">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="m-3 btn btn-chocolate">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/friends" className="m-3 btn btn-chocolate">
                Friends
              </Link>
            </li>
            <li>
              <Link to="/login" className="m-3 btn btn-primary">
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/main" element={<MainPage authed={authed} />} />
          <Route
            path="/login"
            element={<Login authed={authed} setAuthed={setAuthed} />}
          />
          <Route
            path="/profile"
            element={
              <CheckForAuth authed={authed}>
                <Profile />
              </CheckForAuth>
            }
          />
          <Route
            path="/friends"
            element={
              <CheckForAuth authed={authed}>
                <Friends />
              </CheckForAuth>
            }
          >
            <Route path="alex" element={<Alex/>}/>
            <Route path="martha" element={<Martha/>}/>
            <Route path="jhon" element={<Jhon/>}/>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

function CheckForAuth({ authed, children }) {
  return authed === true ? children : <Navigate to="/login" />;
}
