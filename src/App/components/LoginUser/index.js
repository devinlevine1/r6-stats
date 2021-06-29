//External Imports
import { useState } from "react";


//Internal Imports
import signInUsers from "../FirebaseAuthentication/signInUsers";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) =>{
    e.preventDefault();
    signInUsers(email, password)
    console.log(email, password);

  }

  return (
    <div>
      <form>
        <div className="container">
          <h1>Login</h1>
          <p>Log in here and click submit.</p>
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email..."
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label for="username">Password</label>
          <input
            type="password"
            name="pswrd"
            placeholder="Enter Password..."
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="login-btn-wrapper">
            <button
              className="login-register-btns"
              type="submit"
              onClick={(e)=>signIn(e)}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
