import SplashScreen from './components/SplashScreen.jsx';
import Homepage from './pages/Homepage.jsx';
import { useState, useEffect } from 'react';

function App() {

  const [showSplash, setShowSplash]=useState(true);

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setShowSplash(false);
    }, 2000);

    return ()=>clearTimeout(timer);
  }, [])

  return (
    <>
    {showSplash?<SplashScreen/>:<Homepage/>}
    </>
  )
}

export default App
