import { useState } from "react";
import "./App.css";
import Input from "./components/base/input/Input";
import Button from "./components/base/button/Button";
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

      <Button buttonLabel="Submit" type="submit" disabled={false} isProcessing={true}/>
    </>
  );
}

export default App;
