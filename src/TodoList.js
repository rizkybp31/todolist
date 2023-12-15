import { collection, onSnapshot, doc, orderBy, query, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";
import { auth } from './firebase';
import { useHistory } from "react-router-dom";

const TodoList = () => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [reference, setReference] = useState('');
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userReference = '/' + user.uid;
          setReference(userReference);
          const q = query(collection(db, userReference), orderBy("timestamp", "desc"));
          onSnapshot(q, (snapshot) => {
            setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setIsPending(false);
          });
        } else {
          history.push('/');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [history]);

  const handleOnClick = async (event) => {
    const id = event.currentTarget.id;
    try {
      const todoRef = doc(db, reference, id);
      await deleteDoc(todoRef);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Todo</h1>
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
