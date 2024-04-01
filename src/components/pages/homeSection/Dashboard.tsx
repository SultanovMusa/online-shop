// import { useState } from "react";
// import scss from "./Dashboard.module.scss";
// import Modal from "../../UI/modalka/Modal";
// import { useGetProductsQuery } from "../../../redux/api/product";
// import { Link } from "react-router-dom";
// import { HiArchiveBoxXMark } from 'react-icons/hi2';

// const Dashboard = () => {
// 	// ! state1
// 	const [productName, setProductName] = useState<string>("");
// 	const [quantity, setQuantity] = useState<string | null>(null);
// 	const [price, setPrice] = useState<string | null>(null);
// 	const [photoUrl, setPhotoUrl] = useState<string>("");
// 	// ! state 2
// 	const [isEdit, setIsEdit]=useState<boolean>(false)
// 	// ! Mutation

// 	const { data, isLoading } = useGetProductsQuery();

// 	const [isOpen, setIsOpen] = useState(false);

// 	const openModal = () => {
// 		setIsOpen(true);
// 	};

// 	const closeModal = () => {
// 		setIsOpen(false);
// 	};
// 	return (
// 		<div className={scss.Dasboard}>
// 			<div className="containet">
// 				<div className={scss.container}>
// 					<button className={scss.btn1} onClick={openModal}>
// 						Открыть модалько ✅
// 					</button>
// 					<Modal isOpen={isOpen} onClose={closeModal}>
// 						<p> Дабавить новую пазицию </p>
// 						<input
// 							className={scss.input}
// 							type="text"
// 							placeholder="porductName"
// 							value={productName}
// 							onChange={(e) => setProductName(e.target.value)}
// 						/>
// 						<input
// 							className={scss.input}
// 							type="number"
// 							placeholder="quantity"
// 							value={"" + quantity}
// 							onChange={(e) => setQuantity(e.target.value)}
// 						/>
// 						<input
// 							className={scss.input}
// 							type="number"
// 							placeholder="price"
// 							value={"" + price}
// 							onChange={(e) => setPrice(e.target.value)}
// 						/>
// 						<input
// 							className={scss.input}
// 							type="url"
// 							placeholder="photoUrl"
// 							value={photoUrl}
// 							onChange={(e) => setPhotoUrl(e.target.value)}
// 						/>
// 					</Modal>

// 					{isLoading ? (
// 						<h1>Loading ....</h1>
// 					) : (
// 						<>
// 							<div className={scss.products}>
// 								{data?.map((item) => (
// 									<div key={item._id}>
//                     {isEdit === item._id ? (
//               <>
// 							<h1>Mustafa</h1>
// 							</>
// 										): (
//                     <div className={scss.product}>
// 											<Link  to={`/product/${item._id}`}>
// 											<img src={item.photoUrl} alt={item.productName} />
// 											</Link>
// 											<div className={scss.text}>
//                       <p>{item.productName}</p>
//                       <p>{item.quantity}</p>
//                       <p>{item.price}</p>
// 											</div>
// 											<div className={scss.btn}>
//                       <button onClick={}>
// 											<HiArchiveBoxXMark />
// 											</button>
// 											</div>
// 										</div>
// 										)}
// 									</div>
// 								))}
// 							</div>
// 						</>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Dashboard;
