import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function SignupForm() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5174";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <>
      <div className="container p-5" style={{ marginTop: "-9rem" }}>
        <div className="row p-5 d-flex flex-wrap">
          <div className="col-7 p-5">
            <img src="media/images/signupimg1.svg" className="img-fluid" alt="signup" />
          </div>
          <div className="col-4  p-3 d-flex flex-column justify-content-center">
            <h1 className="fs-3 mb-4">Signup now</h1>


            <div className="form_container">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="email" style={{fontSize: "1.1rem"}}>Email</label>
                  <br />
                  <input
                    style={{width: "100%", height: "2.5rem"}}
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="username" style={{fontSize: "1.1rem"}}>Username</label>
                  <br />
                  <input
                    style={{width: "100%", height: "2.5rem"}}
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Enter your username"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" style={{fontSize: "1.1rem"}}>Password</label>
                  <br />
                  <input
                    style={{width: "100%", height: "2.5rem"}}
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                  />
                </div>
                <button type="submit" className="p-2 btn fs-5 mb-2" style={{width: "37%", margin: "0 auto", backgroundColor: "#387ed1", color: "white", borderRadius: "3px"}}>Submit</button>
                <br />
                <span>
                  Already have an account? <Link to={"/signup"}>Login</Link>
                </span>
              </form>
              <ToastContainer />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}