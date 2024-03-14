import React from "react";
import scss from './Modal.module.scss';
import { ReactNode } from "react";
interface ModalProps {
	children: ReactNode;
}
const Modal: React.FC<ModalProps> = ({ children }) => {
	return (
    <div className={scss.modalOverlay}>
      <div className={scss.modal}>
        {children}
      </div>
    </div>
  )
	// return ReactDOM.createPortal(
	// 	<div className={scss.modalOverlay}>
	// 		<div className={scss.modal}>
	// 			{children}
	// 		</div>
	// 	</div>,
	// 	document.getElementById("modal-root")!
	// );
};
export default Modal;
