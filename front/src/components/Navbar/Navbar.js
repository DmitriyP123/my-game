import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

function Navbar() {
  const dispatch = useDispatch()
  const history = useHistory()
  const Authorized = useSelector((state) => state)

  const logOutHandler = () => {
    window.localStorage.removeItem('token')
    dispatch({type:'LOGOUT_USER'})
    window.localStorage.removeItem('currentState')
    history.push("/")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-collapse">
            <Link to="/" className="navbar-brand" style={{ color: "#ffc107" }}>
              Типо Моя игра
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              </li>
              {!Authorized.logged &&<li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link"
                  style={{ color: "#ffc107" }}
                >
                  Login
                </Link>
              </li>}
              {!Authorized.logged && <li className="nav-item">
                <Link
                  to="/registration"
                  className="nav-link"
                  style={{ color: "#ffc107" }}
                >
                  Registration
                </Link> 
              </li>}
              {Authorized.logged &&<li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  style={{ color: "#ffc107" }}
                  onClick = {logOutHandler}
                >
                  LogOut
                </Link>
              </li>}
              {Authorized.logged &&<li className="nav-item">
                <Link
                  to="/profile"
                  className="nav-link"
                  style={{ color: "#ffc107" }}
                >
                  Профиль
                </Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
