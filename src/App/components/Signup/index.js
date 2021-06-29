//External imports
import { useState } from "react";

//Internal imports
import signUpUsers from "../FirebaseAuthentication/signUpUsers";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault()
    signUpUsers(email, password)
  }
  return (
    <div>
      <form>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account and then sign in to view leaderboards.</p>
          <label for="email">Email</label>
          <input
            type="text"
            placeholder="Enter Email..."
            name="email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label for="psw">Password</label>
          <input
            type="password"
            placeholder="Enter Password..."
            name="psw"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <div class="submit">
            <button
              className="login-register-btns"
              type="submit"
              onClick={(e)=>registerUser(e)}
            >
              Sign Up!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
