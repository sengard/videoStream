import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register'
import Login from "./pages/login/Login"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home type="movies" /> : <Register/>}/>
        <Route exact path="/register" element={!user ? <Register/>:<Home/>}/>
        <Route exact path="/login" element={!user ? <Login/>:<Home/>}/>
        {
          user && (
            <>
            <Route exact path="/movies" element={<Home type="movies"/>}/>
            <Route exact path="/series" element={<Home type="series"/>}/>
            <Route exact path="/watch" element={<Watch/>}/>
            </>
          )
        }
      </Routes>
  </Router>
  )
}

export default App;
