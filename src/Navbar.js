import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <div className="container font-poppins px-6 py-4 mx-auto max-w-3xl border-b-2">
      <header className="flex items-center text-slate-800">
        <div className="logo">
          <span className="text-2xl font-bold">MyTodo</span>
        </div>
        <nav className="navigation ml-auto flex gap-4">
          <Link to="/" className="hover:text-slate-600 transition duration-200 ease-in-out">Todo</Link>
          <Link to="/add" className="hover:text-slate-600 transition duration-200 ease-in-out">Add Todo</Link>
        </nav>
      </header>
    </div>
  );
}
 
export default Navbar;