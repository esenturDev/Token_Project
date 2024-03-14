/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/api/productApi";
import Modal from "../../modal/Modal";
import Header from "../../header/Header";
import { Footer } from "../../footer/Footer";
import scss from './Home.module.scss';
import { Welcome } from "./Welcome";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const { data: arrayProducts = [], isLoading } = useGetProductsQuery();
	console.log(arrayProducts);

	function handleModal() {
		setIsOpen((prev) => !prev);
	}

	useEffect(() => {
		const isAuthLogin = localStorage.getItem("isAuthLogin");
		if (isAuthLogin !== "true") {
			navigate("/login");
		}
	}, [navigate]);
	return (
		<div className={scss.home}>
			<Header />
			<button onClick={() => setIsOpen(true)}>Modal Yess</button>
			<main>
				<Welcome/>
			</main>
			{/* {arrayProducts?.map((item) => (
				<div key={item.id}>
					<p>{item.price}</p>
					<img src={item.photoUrl} alt="logo" />
				</div>
			))}
			{
				<Modal isOpen={isOpen} onClose={handleModal}>
					Hello my friend!
				</Modal>
			} */}
			<Footer />
		</div>
	);
};

export default Home;
