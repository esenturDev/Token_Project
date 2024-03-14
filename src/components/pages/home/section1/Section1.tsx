import { useGetProductsQuery } from "../../../../redux/api/productApi";
import scss from "./Section1.module.scss";
import logo from "../../../../assets/photos/streamline_interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love.png";
import { useState } from "react";

const Section1 = () => {
	const { data: productsArray = [] } = useGetProductsQuery();
	const [likeState, setLikeState] = useState<number | boolean>(false);
	console.log(productsArray);
	const handleLike = (id: number) => {
		setLikeState(id);
	};
	return (
		<div className={scss.section1}>
			<div className="container">
				<div className={scss.content}>
					{productsArray.map((item) => (
						<div className={scss.produc} key={item._id}>
							<img src={item.photoUrl} alt={item.productName} />
							<div className={scss.mapContents}>
								<div className={scss.div1}>
									<p className={scss.p}>{item.productName}</p>
									<p>{item.price}</p>
								</div>
								<div className={scss.inonsLikeDiv}>
									<img
										className={
											likeState === item._id
												? `${scss.likeActive}`
												: `${scss.activeNoo}`
										}
										onClick={() => handleLike(item._id!)}
										src={logo}
										alt="logo like"
									/>
								</div>
							</div>
							<button>Добавить в корзину</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Section1;
