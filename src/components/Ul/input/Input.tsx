import { FC, InputHTMLAttributes, ChangeEvent } from "react";
import scss from './Input.module.scss';
interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	label?: string;
	width: string;
	onChange: (value: ChangeEvent<HTMLInputElement>) => void;
	errorMessage?: string;
}
const Input: FC<InputProps> = ({ label, width, onChange, ...rest }) => {
	// const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
	// 	const { value } = event.target;
	// 	onChange(value);
	// };
	return (
		<div className={scss.box}>
			{label && <label className={scss.label}>{label}</label>}
			<input
				onChange={onChange}
				style={{ width, height: "30px" }}
				{...rest}
			/>
		</div>
	);
};
export default Input;
