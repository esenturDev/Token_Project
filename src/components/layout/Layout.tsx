import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import NotFound from "../pages/notFound/NotFound";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import { Footer } from "./footer/Footer";

const MainRoutes = () => {
	const { pathname } = useLocation();
	if (pathname === "/login") {
		return (
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		);
	} else if (pathname === "/registration") {
		return (
			<Routes>
				<Route path="/registration" element={<Registration />} />
			</Routes>
		);
	}
	return (
		<div className={scss.layout}>
			<BrowserRouter>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default MainRoutes;
