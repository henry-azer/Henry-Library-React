import React, { useEffect } from "react";

import AOS from "aos";

import { Formik } from "formik";

import { BsPencilSquare } from "react-icons/bs";

import LightLogo from "..//resources/logo/light-logo.png";

function Register() {
    useEffect(() => {
        document.title = "Register | Henry Library";

        AOS.init();
    });

    return (
        <section className="register">
            <div className="register-background"></div>
            <div className="register-wrapper">
                <div className="register-card">
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
                        <h1>Library Register</h1>
                    </div>

                    <Formik
                        initialValues={{
                            email: "",
                            username: "",
                            password: "",
                            passConfirm: "",
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

                            // Confirm Password Validation
                            if (values.passConfirm && values.password) {
                                if (values.passConfirm !== values.password) {
                                    errors.passConfirm = "Password not matched";
                                }
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
                                <span>
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
                                </span>

                                <fieldset
                                    className="input-field"
                                    data-aos-delay="150"
                                    data-aos-duration="1000"
                                    data-aos="fade-up"
                                >
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

                                <fieldset
                                    className="input-field"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                    data-aos="fade-up"
                                >
                                    <input
                                        placeholder="* * * * * * * *"
                                        autoComplete="off"
                                        name="passConfirm"
                                        required
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.passConfirm}
                                    />
                                    <hr />
                                    <label>Confirm Password</label>
                                </fieldset>
                                <span>
                                    {errors.passConfirm &&
                                        touched.passConfirm &&
                                        errors.passConfirm}
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
                                        Register
                                        <BsPencilSquare className="btn-icon" />
                                    </span>
                                </a>
                            </form>
                        )}
                    </Formik>

                    <div
                        className="login-link"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos="fade-up"
                    >
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
