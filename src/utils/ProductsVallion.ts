import * as Yup from "yup";

export const productsValitions = Yup.object({
	productName: Yup.string().required("Обязательное поле"),
	quantity: Yup.string()
		.max(2, "Парель должен содержать min 6 символов")
		.required("Обязательное поле"),
	price: Yup.string()
		.max(5, "Парель должен содержать min 6 символов")
		.required("Обязательное поле"),
	photoUrl: Yup.string().required("Обязательное поле"),
});
