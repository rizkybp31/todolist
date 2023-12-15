import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Welcome = () => {
  return (
    <div className="container h-screen flex flex-col justify-center items-center px-6 max-w-3xl -mt-8 mx-auto overflow-hidden">
      <h1 className="text-6xl text-center text-slate-900 font-bold mb-8">Welcome to MyTodo</h1>
      <div className="option flex gap-4">
        <Link to='/login' className="text-white border-transparent border-2 px-4 py-2 rounded-lg bg-green-600">Sign In</Link>
        <Link to='/signup' className="text-white border-transparent border-2 px-4 py-2 rounded-lg bg-blue-600">Sign Up</Link>
      </div>
    </div>
  );
}
 
export default Welcome;