import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  const [isUser, setIsUser] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    signOut(auth).then(() => {
      history.push('/')
    }).catch((err) => {
      console.log(err.message);
    })
  }

  useEffect(() => {
    const checkIsUser = async () => {
      try {
        const user = auth.currentUser;
        if(user) {
          setIsUser(true);
          console.log(user.uid);
        }else {
          setIsUser(false);
          console.log(user.uid)
        }
      }catch(err) {
        console.log(err.message);
      }
    };

    checkIsUser();
  }, []);

  return (
    <div className="container font-poppins px-6 py-4 mx-auto max-w-3xl border-b-2">
      <header className="flex items-center text-slate-800">
        <div className="logo">
          <span className="text-2xl font-bold">MyTodo</span>
        </div>
        {!isUser && (
          <nav className="navigation ml-auto flex gap-4">
            <Link
              to="/home"
              className="hover:text-slate-600 transition duration-200 ease-in-out"
            >
              Todo
            </Link>
            <Link
              to="/add"
              className="hover:text-slate-600 transition duration-200 ease-in-out"
            >
              Add Todo
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-slate-600 transition duration-200 ease-in-out"
            >
              Log Out
            </button>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
