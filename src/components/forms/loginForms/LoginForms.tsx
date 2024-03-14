import Input from "../../Ul/input/Input";
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../Ul/button/Button";
import { useLoginMutation } from "../../../redux/api/loginApi";
import { useFormik } from "formik";
import { loginScome } from "../../../utils/LoginVallion";
export const LoginForms = () => {
	const [login] = useLoginMutation();
	const navigate = useNavigate();
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const handleGetEmail = (value: string) => {
	// 	setEmail(value);
	// };
	// const handleGetPassword = (value: string) => {
	// 	setPassword(value);
	// };

	const loginButtonProps: ButtonProps = {
		type: "submit",
		variant: "primary",
		color: "blue",
		width: "300px",
	};

	// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	const result = await login({ email, password });
	// 	if ("data" in result) {
	// 		const { token } = result.data;
	// 		localStorage.setItem("token", token);
	// 		localStorage.setItem("isAuthLogin", "true");
	// 		setEmail("");
	// 		setPassword("");
	// 		navigate("/");
	// 	}
	// };

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginScome,
		onSubmit: async (values) => {
			console.log(values, "values");
			const result = await login({
				email: values.email,
				password: values.password,
			});
			if ("data" in result) {
				const { token } = result.data;
				localStorage.setItem("token", token);
				localStorage.setItem("isAuthLogin", "true");
				navigate("/");
			}
		},
	});

	console.log(formik, "formik");

	return (
		<form onSubmit={formik.handleSubmit}>
			<h3>Вход</h3>
			<Input
				id="email"
				type="email"
				label="Email"
				placeholder="Введите сообщение"
				value={formik.values.email}
				onChange={formik.handleChange}
				width="300px"
				onBlur={formik.handleBlur}
			/>
			{formik.touched.email && formik.errors.email ? (
				<div style={{ color: "red" }}>{formik.errors.email}</div>
			) : null}
			<Input
				id="password"
				type="password"
				label="Password"
				placeholder="Введите сообщение"
				value={formik.values.password}
				onChange={formik.handleChange}
				width="300px"
				onBlur={formik.handleBlur}
			/>
			{formik.touched.password && formik.errors.password ? (
				<div style={{ color: "red" }}>{formik.errors.password}</div>
			) : null}
			<Link to="/registration">Нет Аккаунт, Зарегистрируйтесь</Link>
			<div>
				<Button {...loginButtonProps}>Войти</Button>
			</div>
		</form>
	);
};
