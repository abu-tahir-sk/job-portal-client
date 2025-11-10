import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setErrorMessage("");
   

    if (password.length < 6) {
      setErrorMessage("password should be 6 characters");
      return;
    }
     

    const passwordReg = /([A-Z])([a-z])/;
    if (!passwordReg.test(password)) {
      setErrorMessage("At least one uppercase , one lowercase");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottie}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center py-3">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
               
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {errorMessage && (
            <p className="text-red-600 text-center pb-3 ">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
