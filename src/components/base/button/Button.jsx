import "./button.css";
import Spinner from "react-bootstrap/Spinner";

const Button = ({ buttonLabel, isProcessing, disabled, onClick, type }) => {
  return (
    <>
      <button
        className="button"
        type={type}
        disabled={isProcessing || disabled}
        onClick={onClick}
      >
        {isProcessing ? (
          <Spinner className="spinner-border" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          buttonLabel
        )}
      </button>
    </>
  );
};

export default Button;
