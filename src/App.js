import { useEffect } from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import MainPage from './component/MainPage';
import storeInit from './store/storeInit';


function App() {
  useEffect(() => {
    storeInit()
  },[])
  return (
    <div className="App">
      <Header></Header>
      <MainPage></MainPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
