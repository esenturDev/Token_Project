import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";
import { Login } from "../components/pages/login/Login";
import Registration from "../components/pages/registration/Registration";
import NotFound from "../components/pages/notFound/NotFound";

const MainRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
