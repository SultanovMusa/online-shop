import { FC, ReactNode, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface ProtectRouteProps {
	children: ReactNode;
}

export const ProtectRoute: FC<ProtectRouteProps> = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useParams();
	const isAuth = Boolean(localStorage.getItem("auth_token"));

	useEffect(() => {
		switch (pathname) {
			case "/login":
			case "/regisration":
				if (isAuth) {
					navigate("/");
				}
				break;
			case "/":
			case "/produc":
				if (!isAuth) {
					navigate("/login");
				}
				break;
			default:
				break;
		}
	}, [isAuth,pathname,navigate]);
	return children;
};
