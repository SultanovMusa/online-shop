import Layout from "./components/layout/Layout";
import { Snowfall } from "react-snowfall";

function App() {
	return (
		<>
			<Layout />
			<Snowfall
				color="red"
				style={{ position: "fixed", top: 10, left: 30, right: 20, bottom: 10 }}
			/>
		</>
	);
}

export default App;
