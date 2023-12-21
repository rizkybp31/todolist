import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        history.push("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r">
    
      <div className="container h-screen flex flex-col justify-center px-6 py-4 max-w-3xl mx-auto">
        <div className="flex items-center mx-auto w-3/5 mb-10 justify-between">
          <Link
            to="./"
            className="flex border-2 justify-center items-center w-10 h-10 rounded-full text-white"
          >
            <i class="fa-solid fa-arrow-right rotate-180"></i>
          </Link>
        </div>
        <h1 className="mb-10 text-6xl text-center text-white font-semibold">
          Sign Up
        </h1>
        <form
          onSubmit={createAccount}
          className="border-2 flex flex-col gap-4 px-4 py-8 rounded-lg self-center w-[420px]"
        >
          <input
            type="email"
            id="email-address"
            name="email"
            placeholder="Emaill Address"
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 px-2 py-2 rounded-lg"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 px-2 py-2 rounded-lg"
            required
          />
          <button className="text-white border-transparent border-2 px-4 py-2 rounded-lg bg-red-600 mt-6">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
