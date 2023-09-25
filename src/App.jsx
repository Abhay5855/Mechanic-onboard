import { useState } from "react";
import "./App.css";
import Input from "./components/base/input/Input";
function App() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Input
        placeholder="Enter your email"
        value={email}
        name="email"
        id="email"
        type="password"
        required={true}
        onChange={handleChange}
        feedbackmessage="email is required"
        hasEye={true}
      />
    </>
  );
}

export default App;
