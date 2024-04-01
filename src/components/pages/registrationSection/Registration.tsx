import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./Registration.module.scss";
import { useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "../../../redux/api/auth";

interface IFormInput {
	email: string;
	password: string;
	userName: string;
}

const Registration = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const navigate = useNavigate();
	const [registrationMutation] = useRegistrationMutation();

	const registrationPost: SubmitHandler<IFormInput> = async (data) => {
		await registrationMutation({
			email: data.email,
			password: data.password,
			userName: data.userName,
		});
		navigate("/login");
	};

	return (
		<section className={scss.Registration}>
			<div className="container">
				<div className={scss.content}>
					<form onSubmit={handleSubmit(registrationPost)}>
						<div className={scss.form}>
							<h2>Registration</h2>
							<label htmlFor="eamil">Email: </label>
							<input
								type="text"
								placeholder="email"
								{...register("email", {
									required: true,
									pattern: /^\S+@\S+$/i,
								})}
							/>
							<p>{errors.email && "Ошибка Email"}</p>
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								placeholder="password"
								{...register("password", { required: true, minLength: 6 })}
							/>
							<p>{errors.password && "Ошибка Password"}</p>
							<label htmlFor="userName"> UserName</label>
							<input
								type="text"
								placeholder="userName"
								{...register("userName", { required: true, minLength: 5 })}
							/>
							<p>{errors.userName && "Ошибка userName"}</p>
							<button type="submit">Sing Up</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Registration;
