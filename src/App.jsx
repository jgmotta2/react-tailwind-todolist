import Header from './components/Header'
import Footer from './components/Footer'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-[#181818] to-[#2d2d2d]">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <TaskList />
      </main>
      <Footer />
    </div>
  )
}

export default App