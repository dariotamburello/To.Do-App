import './App.css'
import { TasksProvider } from './contexts/tasks'
import { Header } from './components/Header'
import { ListOfTasks } from './components/ListOfTasks'
import { Footer } from './components/Footer'
import { FilterProvider } from './contexts/filters'
import { AppTitle } from './components/AppTitle'

function App() {
  return (
    <TasksProvider>
      <FilterProvider>
        <div className='my-0 mx-auto max-w-xl'>
          <AppTitle></AppTitle>
          <Header></Header>
          <ListOfTasks></ListOfTasks>
          <Footer></Footer>
        </div>
      </FilterProvider>
    </TasksProvider>
  )
}

export default App
