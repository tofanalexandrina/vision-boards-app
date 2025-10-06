import SplashScreen from './components/SplashScreen.jsx';
import Homepage from './pages/Homepage.jsx';
import Boards from './pages/Boards.jsx';
import { useState, useEffect } from 'react';
import Layout from './layout/Layout.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {

  const [showSplash, setShowSplash]=useState(true);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setShowSplash(false);
    }, 2000);

    return ()=>clearTimeout(timer);
  }, [])

  if(showSplash){
    return <SplashScreen/>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="/boards" element={<Boards/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
