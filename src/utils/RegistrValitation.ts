import * as Yup from "yup";

export const registrScome = Yup.object({
	email: Yup.string().email("Не каратный email").required("Обязательное поле"),
	password: Yup.string()
		.min(6, "Парель должен содержать min 6 символов")
		.required("Обязательное поле"),
	userName: Yup.string()
		.min(4, "Парель должен содержать min 6 символов")
		.required("Обязательное поле"),
});
