
import Nav from './components/Nav'
import { MainRoutes } from './routes/MainRoutes'
const App = () => {
  return (
    <div className='w-screen h-screen bg-black text-white' >
      <Nav/>
      <MainRoutes />
    </div>
  )
}

export default App 