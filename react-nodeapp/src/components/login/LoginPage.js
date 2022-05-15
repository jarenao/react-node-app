import { useState } from "react";
import Spinner from "../common/Spinner";
import Layout from "../layout/Layout";
import { login } from "./service";

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "", remember: false });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { email, password, remember } = credentials;

  const handleChange = (event) => {
    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
    }));
  };

  const resetError = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetError();
      setIsLoading(true);
      const { accessToken } = await login(credentials);
      setIsLoading(false);
      onLogin();
      console.log("accessToken", accessToken);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      console.log(error);
    }
    // console.log(credentials);
  };

  return (
    <Layout>
      <section className="login-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Login form</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              <form className="form-horizontal" id="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="inputEmail3" className="col-sm-2 control-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      value={email}
                      onChange={handleChange}
                      type="email"
                      className="form-control"
                      name="email"
                      id="inputEmail3"
                      placeholder="Email"
                      required=""
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword3" className="col-sm-2 control-label">
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      value={password}
                      onChange={handleChange}
                      type="password"
                      className="form-control"
                      name="password"
                      id="inputPassword3"
                      placeholder="Password"
                      required=""
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                      <label>
                        <input onChange={handleChange} name="remember" type="checkbox" checked={remember} /> Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn" disabled={!email || !password || isLoading}>
                      Sign in
                    </button>
                  </div>
                  {error && (
                    <div onClick={resetError} className="col-sm-offset-2 col-sm-10 error">
                      <span>{error.message}</span>
                    </div>
                  )}
                </div>
              </form>
              {isLoading && <Spinner />}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginForm;
