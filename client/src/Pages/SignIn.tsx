import React from "react";

interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: 'Sign In' | 'Sign Up'; 
}

const SignIn: React.FC<SignInProps> = ({ isOpen, onClose, modalType }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal">
        <div className="modal-content">
        <h2>{modalType}</h2>
          {/* Add your sign-in form and content here */}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

export default SignIn;
