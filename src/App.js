import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Book from './components/Book';

function App() {
  const [books, setBooks] = useState([
    {
      Title: 'Harry Potter',
      Author: 'Jk Rowling',
      id: Date.now(),

    },

  ]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Book books={books} setBooks={setBooks} />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
