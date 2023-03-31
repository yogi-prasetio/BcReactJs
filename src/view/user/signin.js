import { useFormik } from "formik";
// import "../../login.css";
import React from "react";
import { useDispatch } from "react-redux";
import { doSigninRequest } from "../../ReduxSaga/Action/UserAction";

export default function Signin() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      let payload = {
        username: values.username,
        password: values.password,
      };
      dispatch(doSigninRequest(payload));
    },
  });
  return (
    <body
      style={{
        height: "666px",
        display: "flex",
        content: "center",
        justifyContent: "center",
        alignContent: "center",
        msFlex: "center",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div class="card" style={{ width: "33rem" }}>
        <div style={{ margin: "4rem" }}>
          <form method="POST">
            <h1 class="h3 text-center">LOGIN</h1>
            <label for="inputEmail" class="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="username"
              placeholder="Username"
              required
              class="form-control"
            />
            <label for="inputPassword" class="mt-3">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="password"
              placeholder="Password"
              required
              class="form-control"
            />
            <div class="row mt-3 text-center d-grid gap-2 mx-auto">
              <button
                onClick={formik.handleSubmit}
                class="btn btn-primary "
                type="submit"
              >
                {" "}
                Sign In{" "}
              </button>
            </div>
          </form>
          <div class="mt-1 mb-1 text-center">
            <span>OR</span>
          </div>
          <a href="/signup" class="row text-center d-grid gap-2">
            <button type="button" class="btn btn-secondary">
              {" "}
              Sign Up{" "}
            </button>
          </a>
        </div>
      </div>
    </body>
  );
}
