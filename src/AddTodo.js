import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "./firebase";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");
  const [isPending, setIsPending] = useState(false)
  const history = useHistory();

  const handleAddTodo = async () => {
    try {
      if (newTodo.trim() !== "") {
        setIsPending(true);
        const timestamp = new Date();
        const docRef = await addDoc(collection(db, "todolist"), {
          todo: newTodo,
          timestamp: timestamp.toISOString(),
        });
        setIsPending(false)
        history.push('/');
        onAdd({ id: docRef.id, todo: newTodo, timestamp });
        setNewTodo('');
      }
    } catch (err) {
      console.error("Error adding todo: ", err.message);
    }
  };

  return (
    <div className="container px-6 mt-6 flex flex-col max-w-3xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Add new Todo</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="border-2 px-2 py-2 rounded-lg"
      />
      <button 
        onClick={handleAddTodo}
        className="border-2 w-1/3 bg-green-600 mt-4 px-3 py-2 rounded-lg border-transparent text-white"
      >
        { isPending ? 'Adding...' : 'Add Todo' }
      </button>
    </div>
  );
};

export default AddTodo;
