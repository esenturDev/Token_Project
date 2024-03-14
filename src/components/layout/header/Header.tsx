/* eslint-disable @typescript-eslint/no-explicit-any */
import scss from "./Header.module.scss";
import logo from '../../../assets/photos/logo.png'
import logoButton1 from "../../../assets/photos/Button - Войти.png";
import logoButton2 from "../../../assets/photos/Button - Избранное.png";
import logoButton3 from "../../../assets/photos/Button - Избранное (1).png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../modal/Modal";
import { Field, Form, Formik } from "formik";
import logoClone from "../../../assets/photos/Close.png";
import { createPortal } from "react-dom";
import {  usePostProductsMutation } from "../../../redux/api/productApi";
import { productsValitions } from "../../../utils/ProductsVallion";
import Button from "../../Ul/button/Button";

const Header = () => {
	
	const [isOpen, setIsOpen] = useState(false);
	const [postProducts] = usePostProductsMutation();
	const navigate = useNavigate();
	function removeUsers() {
		localStorage.removeItem("token");
		localStorage.removeItem("isAuthLogin");
		navigate("/login");
	}

	const handleSubmit = async (values: any) => {
		console.log("text");
		const { productName, price, quantity, photoUrl } = values;
		await postProducts({ photoUrl, productName, price, quantity });
	};

	return (
		<>
			<header>
				<div className="container">
					<div className={scss.content}>
						<img src={logo} alt="logo" />
						<div className={scss.buttons}>
							<button onClick={() => setIsOpen(true)}>
								<img src={logoButton3} alt="logo" />
							</button>
							<button onClick={removeUsers}>
								<img src={logoButton1} alt="logo Button" />
							</button>
							<button>
								<img src={logoButton2} alt="logo Button" />
							</button>
							<button>
								<img src={logoButton3} alt="logo Button" />
							</button>
						</div>
					</div>
				</div>
			</header>
			{isOpen &&
				createPortal(
					<Modal>
						<div>
							<h3>Добавить новую позицию</h3>
							<img
								onClick={() => setIsOpen(false)}
								src={logoClone}
								alt="logo Modal Noo!!"
							/>
						</div>
						<Formik
							initialValues={{
								productName: "",
								quantity: "",
								price: "",
								photoUrl: "",
							}}
							onSubmit={handleSubmit}
							validationSchema={productsValitions}>
							{({ errors, touched }) => {
								return (
									<Form>
										<label htmlFor="productName">Название товара</label>
										<Field
											id={"productName"}
											name={"productName"}
											type="text"
											placeholder="Название товара"
										/>
										{touched.productName && errors.productName ? (
											<div style={{ color: "red" }}>{errors.productName}</div>
										) : null}
										<label htmlFor="productName">Цена</label>
										<Field
											id={"price"}
											name={"price"}
											type="text"
											placeholder="Название товара"
										/>
										{touched.price && errors.productName ? (
											<div style={{ color: "red" }}>{errors.productName}</div>
										) : null}
										<label htmlFor="quantity">Количество в запасе</label>
										<Field
											id={"quantity"}
											name={"quantity"}
											type="text"
											placeholder="Количество в запасе"
										/>
										{touched.quantity && errors.quantity ? (
											<div style={{ color: "red" }}>{errors.quantity}</div>
										) : null}
										<label htmlFor="photoUrl">Изображение</label>
										<Field
											id={"photoUrl"}
											name={"photoUrl"}
											type="text"
											placeholder="Photo"
										/>
										{touched.photoUrl && errors.photoUrl ? (
											<div style={{ color: "red" }}>{errors.photoUrl}</div>
										) : null}
										<div>
											<button>Отменить</button>
											<Button
												type="submit"
												variant="primary"
												color="blue"
												width="300px">
												Сохранить
											</Button>
										</div>
									</Form>
								);
							}}
						</Formik>
					</Modal>,
					document.getElementById("modal-root") as any
				)}
		</>
	);
};

export default Header;
