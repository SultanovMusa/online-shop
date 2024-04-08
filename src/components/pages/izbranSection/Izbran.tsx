import { usePostProducBasketMutation } from "../../../redux/api/basket";
import { useGetProductFavoriteQuery } from "../../../redux/api/fovarite";
import scss from "./Izbran.module.scss";
import { FcLike } from "react-icons/fc";

const Izbran = () => {
	const { data, isLoading } = useGetProductFavoriteQuery();
	const [postProducBasket] = usePostProducBasketMutation();
	console.log(data);

	return (
		<section className={scss.izbran}>
			<div className="container">
				<div className={scss.container}>
					<h2>Избранный</h2>
					<h4>Здесь собраны понравившиеся Вам модели.</h4>
					{isLoading ? (
						<h1>Loading....</h1>
					) : (
						<div className={scss.products}>
							{data?.map(
								(item) =>
									item.product !== null && (
										<div key={item._id}>
											<div className={scss.product}>
												<img
													src={item.product.photoUrl}
													alt={item.product.productName}
												/>
												<div className={scss.texts}>
													<div className={scss.text}>
														<p>Названия: {item.product.productName}</p>
														<p>Каличиства: {item.product.quantity}</p>
														<p> Цена: {item.product.price}</p>
													</div>
													<span>
														<FcLike />
													</span>
												</div>
												<button
													onClick={() => postProducBasket(item.product._id)}>
													Добавить в корзину
												</button>
											</div>
										</div>
									)
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Izbran;
