import * as Yup from "yup";

export const loginScome = Yup.object({
	email: Yup.string().email("Не каратный email").required("Обязательное поле"),
	password: Yup.string()
		.min(6, "Парель должен содержать min 6 символов")
		.required("Обязательное поле"),
});
