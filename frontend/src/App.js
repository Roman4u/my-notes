import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';



function App() {
   
  return (
    <Router>
      <div className="App">
        <div> 
          <Header />
            <Routes>
              <Route>
                  {/* <Header /> */}
                  {/* <Route path="/" element={<Header />} />  */}
                  <Route path="/" element={<NotesListPage />} />
                  <Route path="/note/:id" element={<NotePage />} />
              </Route>
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
