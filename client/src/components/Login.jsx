import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css'

// ************** CHANGE HERE: "export default function" (instead of just "function" **************
export default function Login() {
const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "Email",
    password: "Password",
  });

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  const { email, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const login = async () => {
  try {
    const { data } = await axios("/api/auth/login", {
      method: "POST",
      data: credentials,
    });

    //store it locally
    localStorage.setItem("token", data.token);
    console.log(data.message, data.token);
    navigate("/designs");

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <div>
        <input
          value={email}
          onChange={handleChange}
          name="email"
          type="text"
          className="email-password-input"
        />
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          className="email-password-input"
        />
        <div className="login-button">
          <button className="login-button" onClick={login}>
            Log in
          </button>
        </div>
      </div>
      

      {data && (
        <div className="text-center p-4">
          <div className="alert">{data}</div>
        </div>
      )}
    </div>
  );
}

