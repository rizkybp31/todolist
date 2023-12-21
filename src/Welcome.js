import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Welcome = () => {
  return (
    <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r">
      <div className="container h-screen flex flex-col justify-center items-center px-6 max-w-3xl mx-auto overflow-hidden">
      <h1 className="text-6xl text-center text-white font-bold mb-8">Welcome to <span className="text-red-600">My</span>Todo</h1>
      <div className="option flex gap-4">
        <Link to='/login' className="w-24 text-center text-white border-2 px-4 py-2 rounded-lg hover:border-red-600 hover:text-red-600">Sign In</Link>
        <Link to='/signup' className="w-24 text-center border-2 border-transparent text-white px-4 py-2 rounded-lg bg-red-600 hover:border-2 hover:text-white hover:border-white">Sign Up</Link>
      </div>
    </div>
    </div>
  );
}
 
export default Welcome;