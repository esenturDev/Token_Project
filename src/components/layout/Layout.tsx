import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import NotFound from "../pages/notFound/NotFound";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import { Footer } from "./footer/Footer";

const MainRoutes = () => {
	return (
		<div className={scss.layout}>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/registration" element={<Registration />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer/>
			</BrowserRouter>
		</div>
	);
};

export default MainRoutes;
