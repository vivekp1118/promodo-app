import { useState,useContext } from "react";
import { auth } from "../src/config";
import { AuthContext } from '../src/Context';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function SignIn() {
  const {setLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(
        setLogin(true),
        navigate("/Home")
        )
      .catch((err) => console.log(err));
  };
  return (
    <div className="main">
      <div className="signup">
        <p className="header">Log In</p>
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
        <button onClick={signIn}>Login </button>
        <button ><Link to={"/"}>Sign Up</Link></button>
      </div>
    </div>
  );
}


