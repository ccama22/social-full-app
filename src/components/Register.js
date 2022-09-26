import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
      console.log("ccama normal");
    } catch (error) {
      // setError(error.code);
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      } else if (error.code === "auth/email-already-in-use") {
        setError("El correo ya existe");
      } else if (error.code === "auth/weak-password") {
        setError("Contraseña debil");
      }
      // setError(error.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="ccamacruz2018@gmail.com"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
};
