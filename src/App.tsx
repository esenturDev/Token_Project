import { Provider } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import { store } from "./redux/store";

const App = () => {
	return (
		<>
			<Provider store={store}>
				<MainRoutes />
			</Provider>
		</>
	);
};

export default App;
