import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      history.push('/home');
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

  return (
    <div className="container flex flex-col justify-center px-6 py-4 max-w-3xl mt-4 mx-auto">
      <form
        onSubmit={loginUser}
        className="border-2 flex flex-col gap-4 px-4 py-8 rounded-lg"
      >
        <h1 className="text-xl font-semibold mb-8">Login</h1>
        <input 
          type="email"
          id="email-address" 
          name="email"
          placeholder="Emaill Address"
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 px-2 py-2 rounded-lg"
        />
        <input 
          type="password"
          id="password" 
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 px-2 py-2 rounded-lg"
        />
        <button className="text-white border-transparent border-2 px-4 py-2 rounded-lg bg-blue-600 mt-6">Login</button>
      </form>
    </div>
  );
}
 
export default Login;