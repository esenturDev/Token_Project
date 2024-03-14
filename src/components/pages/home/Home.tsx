/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/api/productApi";
import { Welcome } from "./Welcome";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
	const navigate = useNavigate();
	const { data: arrayProducts = [] } = useGetProductsQuery();
	console.log(arrayProducts);

	useEffect(() => {
		const isAuthLogin = localStorage.getItem("isAuthLogin");
		if (isAuthLogin !== "true") {
			navigate("/login");
		}
	}, [navigate]);

	return (
		<>
				<Welcome />
		</>
	);
};

export default Home;
