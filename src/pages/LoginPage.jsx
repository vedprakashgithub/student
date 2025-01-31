import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Header from "./../components/Header";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/students");
    } catch (err) {
      console.error("Error during login:", err.code, err.message);
      setError("Invalid credentials or authentication issue!");
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className=" cursor-pointer w-full py-3 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
