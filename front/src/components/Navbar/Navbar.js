import { Link } from "react-router-dom";

function Navbar() {

  const logOutHandler = () => {
    
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
                <Link
                  to="/info"
                  className="nav-link"
                  style={{ color: "#ffc107" }}
                >
                  Info
                </Link>
              </li>
               <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link"
                  style={{ color: "#ffc107" }}
                >
                  Login
                </Link>
              </li>
             <li className="nav-item">
                <Link
                  to="/registration"
                  className="nav-link"
                  style={{ color: "#ffc107" }}
                >
                  Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  style={{ color: "#ffc107" }}
                  onClick = {logOutHandler}
                >
                  LogOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
