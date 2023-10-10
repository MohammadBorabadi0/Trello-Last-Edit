import "./App.css";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import TopNav from "./components/SecondNav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <section className="flex">
        <Sidebar />
        <div className="flex flex-col overflow-x-auto h-screen">
          <TopNav />
          <KanbanBoard />
        </div>
      </section>
    </div>
  );
}

export default App;
