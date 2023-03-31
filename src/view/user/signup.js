import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { doSignupRequest } from "../../ReduxSaga/Action/UserAction";
import { useFormik } from "formik";

export default function Signup() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
    onSubmit: async (values) => {
      let payload = {
        username: values.username,
        email: values.email,
        phone: values.phone,
        password: values.password,
      };
      dispatch(doSignupRequest(payload));
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
            <h1 class="h3 text-center">REGISTER</h1>
            <label for="inputUsername" class="mt-3">
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
              required
              class="form-control"
              placeholder="Username"
            />
            <label for="inputEmail" class="mt-3">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="email"
              required
              class="form-control"
              placeholder="example@mail.com"
            />
            <label for="inputPhone" class="mt-3">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              autoComplete="phone"
              required
              class="form-control"
              placeholder="081666234404"
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
              autoComplete="current-password"
              required
              class="form-control"
              placeholder="Password"
            />
            {/* <input type="text" value={new Date()}></input> */}
            <div class="row mt-3 text-center d-grid gap-2 mx-auto">
              <button
                type="button"
                onClick={formik.handleSubmit}
                className="btn btn-secondary"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div class="mt-1 mb-1 text-center">
            <span>OR</span>
          </div>
          <a href="/signin" class="row text-center d-grid gap-2">
            <button type="button" className="btn btn-primary">
              Sign In
            </button>
          </a>
        </div>
      </div>
    </body>
  );
}
