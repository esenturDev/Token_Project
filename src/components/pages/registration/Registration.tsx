import { FC } from "react";
import { RegistrationForms } from "../../forms/registrationForms/RegistrationForms";

interface RegistrationProps {}
const Registration: FC<RegistrationProps> = () => {
	return (
		<div>
			<RegistrationForms />
		</div>
	);
};

export default Registration;
