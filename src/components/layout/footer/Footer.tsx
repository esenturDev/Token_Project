import scss from "./Footer.module.scss";
import logo from "../../../assets/photos/BRANDNAME.png";
import logo2 from "../../../assets/photos/vector shape 1.png";
export const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.footerDiv1Contents}>
						<div className={scss.footerDiv1}>
							<img src={logo} alt="logo" />
							<div className={scss.divtexts}>
								<p>О нас</p>
								<p>Контакты</p>
							</div>
							<div className={scss.divtexts}>
								<p>Способы оплаты</p>
								<p>Условия доставки</p>
							</div>
							<div className={scss.divtexts}>
								<p>Пользовательское соглашение</p>
								<p>Политика конфиденциальности</p>
							</div>
						</div>
						<div className={scss.footerDiv2}>
							<h3>brandname.com </h3>
							<img src={logo2} alt="logo2" />
							<h3>2023</h3>
							<h3>Все права защищены</h3>
						</div>
					</div>
				</div>
			</div>
			<div className={scss.footerDivContents2}>
				<div className={scss.bekColorDivYolloy}>
					<p>Onlineshop</p>
					<p>Onlineshop</p>
				</div>
				<div className={scss.bekColorDivGreen}>
					<p>Onlineshop</p>
					<p>Onlineshop</p>
					<p>Onlineshop</p>
				</div>
			</div>
		</footer>
	);
};
