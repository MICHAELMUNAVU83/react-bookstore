import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
