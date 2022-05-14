const LoginForm = () => (
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
          <form className="form-horizontal" id="login-form">
            <div className="form-group">
              <label for="inputEmail3" className="col-sm-2 control-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" required="" />
              </div>
            </div>
            <div className="form-group">
              <label for="inputPassword3" className="col-sm-2 control-label">
                Password
              </label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" required="" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <div className="checkbox">
                  <label>
                    {" "}
                    <input type="checkbox" /> Remember me{" "}
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default LoginForm;
