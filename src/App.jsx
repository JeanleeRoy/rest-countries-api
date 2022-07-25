import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Country from './views/Country';
import Home from './views/Home';
import './assets/styles/app.scss'

const App = () => {
  return (
    <>
      <Header />
      <main role="main">
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/country/:name' element={<Country />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
