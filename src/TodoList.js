import { collection, onSnapshot, doc, orderBy, query, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";


const TodoList = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "todolist"), orderBy("timestamp", "desc"));
        onSnapshot(q, (snapshot) => {
          setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
          setIsPending(false);
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();

  }, []);

  const handleOnClick = async (event) => {
    const id = event.currentTarget.id;
    try {
      const todoRef = doc(db, 'todolist', id);
    await deleteDoc(todoRef);
    }catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Todo</h1>
      {isPending && <div>Loading...</div>}
      <div className="flex flex-col gap-4">
        {data.map((list) => (
          <div className="flex justify-between border-2 px-2 py-4 rounded-lg pr-4" key={list.id}>
            <p>{list.todo}</p>
            <input type="checkbox" onClick={handleOnClick} id={list.id} />
          </div>
        ))}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default TodoList;
