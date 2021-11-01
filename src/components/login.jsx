import React, { useEffect } from "react";

import AOS from "aos";

import { Formik } from "formik";

import LightLogo from "..//resources/logo/light-logo.png";

function Login() {
    useEffect(() => {
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

                            if (!values.password) {
                                errors.password = "Required";
                            }

                            if (!values.email) {
                                errors.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = "Invalid email address";
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
                                    class="input-field"
                                    data-aos-delay="150"
                                    data-aos-duration="1000"
                                    data-aos="fade-up"
                                >
                                    <input
                                        placeholder="henryazer@outlook.com"
                                        autocomplete="off"
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
                                {errors.email && touched.email && errors.email}

                                <fieldset
                                    class="input-field"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                    data-aos="fade-up"
                                >
                                    <input
                                        placeholder="* * * * * * * *"
                                        autocomplete="off"
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
                                {errors.password &&
                                    touched.password &&
                                    errors.password}

                                <div
                                    className="button-wrapper"
                                    data-aos-delay="250"
                                    data-aos-duration="1000"
                                    data-aos="fade-up"
                                >
                                    <a
                                        href="underDev.com"
                                        className="btn-1"
                                        rel="noreferrer"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        log in
                                    </a>
                                </div>
                            </form>
                        )}
                    </Formik>

                    <div
                        className="register-link"
                        data-aos-delay="300"
                        data-aos-duration="1000"
                        data-aos="fade-up"
                    >
                        <h3>haven't account ? </h3>
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
