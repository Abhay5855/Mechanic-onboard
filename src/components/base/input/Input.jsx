/* eslint-disable react/prop-types */
import "./input.css";
import eye from "../../../assets/icons/icon-seepassword.svg";
import eyeSlashed from "../../../assets/icons/icon-eyeslashpassword.svg";
import { useState } from "react";

const Input = ({
  label,
  placeholder,
  feedbackmessage,
  type,
  required,
  onChange,
  name,
  value,
  onFocus,
  id,
  hasEye,
}) => {

  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  }
  return (
    <div className="input-container">
     
        {label && <label>{label}</label>}

      <input
          className="form-control"
          type={visible ? "text" : type}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          onFocus={onFocus}
          value={value}
          name={name}
          id={id}
        />

      {hasEye && type === "password" && <img onClick={handleVisible} className="eye-icon" alt="img" src={visible ? eye : eyeSlashed} />}


        {feedbackmessage && (
          <p className="invalid-message">
            {feedbackmessage}
          </p>
        )}
    </div>
  );
};

export default Input;
