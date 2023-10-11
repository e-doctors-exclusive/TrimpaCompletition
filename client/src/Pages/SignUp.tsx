import "../styles/SignUp.css"
import React, {ReactNode} from 'react'
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function SignUp({ isOpen, onClose, children }: ModalProps) {

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
    )
}

export default SignUp