import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Reset } from 'styled-reset';

function App() {
  return (
    <BrowserRouter>
    <Reset />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;