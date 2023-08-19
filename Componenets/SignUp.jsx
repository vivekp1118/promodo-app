import { useState } from "react";
import { auth } from "../src/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(navigate("/Home"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="main">
      <div className="signup">
        <p className="header">Sign up</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="pswd"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signup}>Sign up</button>
        <button ><Link to={"/Login"}>Login</Link></button>
      </div>
    </div>
  );
}


