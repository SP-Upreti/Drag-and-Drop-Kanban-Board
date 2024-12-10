import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './components/board/board';
import Documentation from './components/documenttation/documentation';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Board />} />
          <Route path='/documentation' element={<Documentation />} />
        </Routes>
      </BrowserRouter>

    </main>
  );
}

export default App;
