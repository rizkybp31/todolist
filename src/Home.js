import TodoList from "./TodoList";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r h-screen">
      <Navbar />
      <div className="container px-6 py-4 max-w-3xl mt-4 mx-auto">
        <main>
          <TodoList />
        </main>
      </div>
    </div>
  );
};

export default Home;
