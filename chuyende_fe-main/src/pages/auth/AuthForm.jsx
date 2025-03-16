import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isRegister ? (
        <Register onSwitch={() => setIsRegister(false)} />
      ) : (
        <Login onSwitch={() => setIsRegister(true)} />
      )}
    </div>
  );
};

export default AuthForm;
