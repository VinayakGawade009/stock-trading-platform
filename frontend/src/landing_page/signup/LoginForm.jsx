import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import HeroForLogin from "./HeroForLogin";

export default function LoginForm() {
  // const navigate = useNavigate(); // As we have to navigate to different app we don't need this
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/login",
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
      if (error.response && error.response.data && error.response.data.message) { // if specific error occured
        handleError(error.response.data.message);
      }
      // If the server crashed or network failed
      else {
        handleError("Login failed. Please try again.");
      }
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <>
      <HeroForLogin />
      <div className="container p-5" style={{ marginTop: "-9rem" }}>
        <div className="row p-5 d-flex flex-wrap">
          <div className="col-5 p-3 d-flex flex-column justify-content-center">
            <h1 className="fs-3 mb-4">Login</h1>

            <div className="form_container">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="email" style={{ fontSize: "1.1rem" }}>Email</label>
                  <input
                    style={{ width: "100%", height: "2.5rem" }}
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" style={{ fontSize: "1.1rem" }}>Password</label>
                  <input
                    style={{ width: "100%", height: "2.5rem" }}
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                    required
                    minLength={3}
                  />
                </div>
                <button type="submit" className="p-2 btn fs-5 mb-2" style={{ width: "37%", margin: "0 auto", backgroundColor: "#387ed1", color: "white", borderRadius: "3px" }}>Submit</button>
                <br />
                <span>
                  Already have an account? <Link to={"/signup"}>Signup</Link>
                </span>
              </form>
              <ToastContainer />
            </div>

          </div>

          {/* <div className="col-1"></div> */}

          <div className="col-7 p-5">
            <img src="/media/images/kite.svg" className="img-fluid" alt="kite" />
          </div>
        </div>
      </div>
    </>
  );
}