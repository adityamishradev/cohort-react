import React from 'react'
import Nav from './components/Nav'
import MainRoute from './routes/MainRoute'
const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      <Nav />
      <MainRoute />
    </div>
  )
}

export default App