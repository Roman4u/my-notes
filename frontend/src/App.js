import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';



function App() {
   
  return (
    <Router>
      <div className="App">
      <Routes>
          {/* <Header /> */ }
          <Route path="/" exact element={<Header />}  />
          <Route path="/noteslistpage" exact element={<NotesListPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
