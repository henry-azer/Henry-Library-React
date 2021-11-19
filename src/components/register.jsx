import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Formik } from "formik";

import { BsPencilSquare } from "react-icons/bs";

import LightLogo from "..//resources/logo/light-logo.png";

function Register() {
    useEffect(() => {
        document.title = "Register | Henry Library";
    });

    return (
        <section className="register">
            <div className="register-background"></div>
            <div className="register-wrapper">
                <div className="register-card">
                    <Link to="/">
                        <img
                            className="logo-img"
                            src={LightLogo}
                            alt="logo-img"
                        />
                    </Link>
                    <div className="title-heading-wrapper">
                        <h1>Library Register</h1>
                    </div>

                    <Formik
                        initialValues={{
                            email: "",
                            username: "",
                            password: "",
                        }}
                        validate={(values) => {
                            const errors = {};

                            // Email Validation
                            if (!values.email) {
                                errors.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = "Invalid email address.";
                            }

                            // Username Validation
                            const usernameRegex = /^[a-zA-Z0-9]+$/;
                            if (!values.username) {
                                errors.username = "Required";
                            } else if (usernameRegex.test(values.username)) {
                                errors.username = "Invalid username.";
                            }

                            // Password Validation
                            const passwordRegex = /(?=.*[0-9])/;
                            if (!values.password) {
                                errors.password = "Required";
                            } else if (values.password.length < 8) {
                                errors.password =
                                    "Password must be 8 characters long.";
                            } else if (!passwordRegex.test(values.password)) {
                                errors.password =
                                    "Password Must contain one number.";
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form
                                onSubmit={handleSubmit}
                                className="register-form"
                            >
                                <fieldset className="input-field">
                                    <input
                                        placeholder="henryazer@outlook.com"
                                        autoComplete="off"
                                        type="text"
                                        name="email"
                                        required
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <hr />
                                    <label>Email</label>
                                </fieldset>
                                <span>
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
                                </span>

                                <fieldset className="input-field">
                                    <input
                                        placeholder="Henry Azer"
                                        autoComplete="off"
                                        type="text"
                                        name="username"
                                        required
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                    <hr />
                                    <label>Username</label>
                                </fieldset>
                                <span>
                                    {errors.username &&
                                        touched.username &&
                                        errors.username}
                                </span>

                                <fieldset className="input-field">
                                    <input
                                        placeholder="* * * * * * * *"
                                        autoComplete="off"
                                        name="password"
                                        required
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <hr />
                                    <label>Password</label>
                                </fieldset>
                                <span>
                                    {errors.password &&
                                        touched.password &&
                                        errors.password}
                                </span>

                                <a
                                    className="btn-2"
                                    href="underDev.com"
                                    rel="noreferrer"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    <span>
                                        Register
                                        <BsPencilSquare className="btn-icon" />
                                    </span>
                                </a>
                            </form>
                        )}
                    </Formik>

                    <div className="login-link">
                        <h3>have account? </h3>
                        <a href="login" rel="noreferrer">
                            Log In Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
