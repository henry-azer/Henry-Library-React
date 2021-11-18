import React, { useEffect } from "react";

import AOS from "aos";

import { Formik } from "formik";

import { BsFillKeyFill } from "react-icons/bs";

import LightLogo from "..//resources/logo/light-logo.png";

function Login() {
    useEffect(() => {
        document.title = "Log In | Henry Library";

        AOS.init();
    });

    return (
        <section className="login">
            <div className="login-background"></div>
            <div className="login-wrapper">
                <div className="login-card">
                    <img
                        className="logo-img"
                        src={LightLogo}
                        alt="logo-img"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos="fade-up"
                    />
                    <div
                        className="title-heading-wrapper"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos="fade-up"
                    >
                        <h1>Library Log in</h1>
                    </div>

                    <Formik
                        initialValues={{ email: "", password: "" }}
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
                                className="login-form"
                            >
                                <fieldset
                                    className="input-field"
                                    data-aos-delay="150"
                                    data-aos-duration="1000"
                                    data-aos="fade-up"
                                >
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
                                <span
                                    data-aos-delay="150"
                                    data-aos-duration="1000"
                                    data-aos="fade-up"
                                >
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
                                </span>

                                <fieldset
                                    className="input-field"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                    data-aos="fade-up"
                                >
                                    <input
                                        placeholder="* * * * * * * *"
                                        autoComplete="off"
                                        name="password"
                                        required
                                        type={
                                            values.showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <hr />
                                    <label>Password</label>
                                </fieldset>
                                <span
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                    data-aos="fade-up"
                                >
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
                                    data-aos-delay="250"
                                    data-aos-duration="1000"
                                    data-aos="fade-up"
                                >
                                    <span>
                                        LOG IN
                                        <BsFillKeyFill className="btn-icon" />
                                    </span>
                                </a>
                            </form>
                        )}
                    </Formik>

                    <div
                        className="register-link"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos="fade-up"
                    >
                        <h3>haven't account? </h3>
                        <a href="register" rel="noreferrer">
                            Create new account
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
