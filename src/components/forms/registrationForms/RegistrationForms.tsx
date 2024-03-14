/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import Input from "../../Ul/input/Input";
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../Ul/button/Button";
import { useCreateUserMutation } from "../../../redux/api/usersApi";
import { Field, Form, Formik } from "formik";
import { registrScome } from "../../../utils/RegistrValitation";

export const RegistrationForms = () => {
	const navigate = useNavigate();
	const [createUser] = useCreateUserMutation();
	// const handleGetEmail = (value: string) => {
	// 	setEmail(value);
	// };
	// const handleGetPassword = (value: string) => {
	// 	setPassword(value);
	// };
	// const handleGetUserName = (value: string) => {
	// 	setUserName(value);
	// };

	const handleSubmit = async (values: any) => {
		const { email, userName, password } = values;
		const result = await createUser({ email, password, userName });
		if (result) {
			// setEmail("");
			// setPassword("");
			// setUserName("");
			navigate("/login");
		}
	};

	const loginButtonProps: ButtonProps = {
		type: "submit",
		variant: "primary",
		color: "blue",
		width: "300px",
	};

	return (
		<Formik
			initialValues={{ email: "", userName: "", password: "" }}
			onSubmit={handleSubmit}
			validationSchema={registrScome}>
			{({ errors, touched }) => {
				return (
					<Form>
						<label htmlFor="firsName">Email</label>
						<Field
							id={"email"}
							name={"email"}
							type="email"
							placeholder="Email"
						/>
						{touched.email && errors.email ? (
							<div style={{ color: "red" }}>{errors.email}</div>
						) : null}
						<label htmlFor="userName">userName</label>
						<Field
							id={"userName"}
							name={"userName"}
							type="userName"
							placeholder="userName"
						/>
						{touched.userName && errors.userName ? (
							<div style={{ color: "red" }}>{errors.userName}</div>
						) : null}
						<label htmlFor="password">password</label>
						<Field
							id={"password"}
							name={"password"}
							type="password"
							placeholder="password"
						/>
						{touched.password && errors.password ? (
							<div style={{ color: "red" }}>{errors.password}</div>
						) : null}
						<Link to="/login">У меня есть аккаунт, войти</Link>
						<Button {...loginButtonProps}>Зарегистрируйтесь</Button>
					</Form>
				);
			}}
		</Formik>
		// <form onSubmit={handleSubmit}>
		// 	<h3>Registration</h3>
		// 	<Input
		// 		type="email"
		// 		label="Email"
		// 		placeholder="Введите сообщение"
		// 		value={email}
		// 		onChange={handleGetEmail}
		// 		width="300px"
		// 	/>
		// 	<Input
		// 		type="text"
		// 		label="имя пользватьелья"
		// 		placeholder="Введите сообщение"
		// 		value={userName}
		// 		onChange={handleGetUserName}
		// 		width="300px"
		// 	/>
		// 	<Input
		// 		type="password"
		// 		label="Password"
		// 		placeholder="Введите сообщение"
		// 		value={password}
		// 		onChange={handleGetPassword}
		// 		width="300px"
		// 	/>
		// 	<div>
		// 	</div>
		// </form>
	);
};
