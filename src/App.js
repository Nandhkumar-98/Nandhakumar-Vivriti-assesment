import React, { useState } from 'react';
import searchContext from './constant';
import Header from './components/header';
import Products from './components/Products';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {

  const [globalSearch, setGlobalSearch] = useState("");
  const [searchAction, setSearchAction] = useState(true);


  return (<>

    <searchContext.Provider value={{ globalSearch, searchAction, setGlobalSearch, setSearchAction }}>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Products />} />
        </Routes>
      </Router>
    </searchContext.Provider>

    <Footer />
  </>


  );
}

export default App;
