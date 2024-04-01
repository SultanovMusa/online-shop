import HomePages from "../pages/HomePages";
import IzbranPages from "../pages/IzbranPages";
import LoginPages from "../pages/LoginPages";
import NotFoundPages from "../pages/NotFoundPages";
import ProductPages from "../pages/ProductPages";
import RegistrationPages from "../pages/RegistrationPages";
import scsss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";

const Layout = () => {
	return (
		<div className={scsss.Layout}>
			<Header />
			<hr />
			<main>
				<Routes>
					<Route path="/" element={<HomePages />} />
					<Route path="/login" element={<LoginPages />} />
					<Route path="/registration" element={<RegistrationPages />} />
					<Route path="/izbran" element={<IzbranPages />} />
					<Route path="/product:productID" element={<ProductPages />} />
					<Route path="*" element={<NotFoundPages />} />
				</Routes>
			</main>
			<Footer />
			<hr />
		</div>
	);
};

export default Layout;
