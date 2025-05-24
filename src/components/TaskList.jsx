import { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.slice(0, 15)); // Limita para 15 tarefas para visualização
        setLoading(false);
      });
  }, []);

  // Alternar status de concluído
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Adicionar nova tarefa
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks((prev) => [
      ...prev,
      {
        userId: 1,
        id: Date.now(),
        title: newTask,
        completed: false,
      },
    ]);
    setNewTask("");
  };

  // Remover tarefa
  const handleRemoveTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  if (loading) {
  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-br from-black via-[#181818] to-[#2d2d2d] relative">
      {/* Efeito dourado sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#bfa14a] to-transparent opacity-60 rounded-full" />
      <span className="text-[#bfa14a] text-xl animate-pulse z-10">Carregando tarefas...</span>
    </div>
  );
}

return (
  <div className="w-full relative">
    {/* Efeito dourado sutil no topo */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-[#bfa14a] to-transparent opacity-60 rounded-full" />
    {/* Efeito dourado sutil no rodapé */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#bfa14a] to-transparent opacity-40 rounded-full" />
    <div className="max-w-2xl w-full mx-auto bg-[#181818] rounded-xl shadow-2xl p-6 border border-[#bfa14a] relative z-10 my-12">
      <h2 className="text-3xl font-bold mb-6 text-[#bfa14a] text-center drop-shadow-[0_2px_8px_rgba(191,161,74,0.3)]">
        Suas Tarefas
      </h2>
      {/* Caixa de adicionar nova tarefa */}
      <form onSubmit={handleAddTask} className="flex mb-6 gap-2">
        <input
          type="text"
          className="flex-1 rounded-lg px-4 py-2 bg-[#232323] border border-[#bfa14a] text-white placeholder-[#bfa14a] focus:outline-none focus:ring-2 focus:ring-[#bfa14a] transition"
          placeholder="Digite uma nova tarefa..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#bfa14a] to-[#ffe066] text-black font-bold shadow hover:scale-105 transition"
        >
          Adicionar
        </button>
      </form>
      <ul className="space-y-4">
  {tasks.map((task) => (
    <li
      key={task.id}
      className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-300 shadow-lg cursor-pointer ${
        task.completed
          ? "bg-gradient-to-r from-[#232323] to-[#2d2d2d] border-[#bfa14a] text-[#bfa14a] line-through opacity-70"
          : "bg-gradient-to-r from-[#232323] to-[#181818] border-[#444] text-[#bfa14a]"
      }`}
      style={{
        boxShadow: task.completed
          ? "0 2px 12px 0 rgba(191,161,74,0.15)"
          : "0 2px 8px 0 rgba(0,0,0,0.25)",
      }}
      title="Clique para marcar/desmarcar como concluída"
    >
      <span
        className="flex-1 select-none"
        onClick={() => toggleTask(task.id)}
      >
        {task.title}
      </span>
      <span
        className={`ml-4 w-4 h-4 rounded-full border-2 flex-shrink-0 ${
          task.completed
            ? "bg-[#bfa14a] border-[#bfa14a] shadow-[0_0_8px_2px_rgba(191,161,74,0.4)]"
            : "border-[#bfa14a]"
        }`}
        title={task.completed ? "Concluída" : "Pendente"}
        onClick={() => toggleTask(task.id)}
      ></span>
      <button
        className="ml-4 px-2 py-1 rounded bg-[#bfa14a] text-black font-bold hover:bg-[#ffe066] transition"
        onClick={(e) => {
          e.stopPropagation();
          handleRemoveTask(task.id);
        }}
        title="Remover tarefa"
      >
        Remover
      </button>
    </li>
  ))}
</ul>
    </div>
  </div>
);
}

export default TaskList;