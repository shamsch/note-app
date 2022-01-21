//react
import { useState } from "react";

//hooks
import { useSignup } from "../../hooks/useSignup";

// styles
import styles from "./Signup.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { signup, error, isPending } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
    setEmail('')
    setName('')
    setPassword('')
  };

  return (
    <div>
      {!isPending?(<form onSubmit={handleSubmit} className={styles["signup-form"]}>
        <h2>login</h2>
        <label>
          <span>email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>display name:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {error? <p>{error} Please reload to sign up again.</p> : <button className="btn">Sign up!</button>}
      </form>) : (<p>loading...</p>)}
      

    </div>
  );
}
