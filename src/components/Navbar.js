import { Link } from "react-router-dom";
//hook
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// styles
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>My Notes</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
          <li>
            <p>Hiya, {user.displayName}!</p>
          </li>
          <li>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </li>
          </>
        )}
      </ul>
    </nav>
  );
}
