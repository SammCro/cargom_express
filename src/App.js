import Map from './pages/Map';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <>
        <Navbar></Navbar> {/*I added this navbar outside of the Routes, because it appears on every page.*/}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/map' element={<Map/>}></Route>
        </Routes>
    </>
    
  );
}

export default App;
