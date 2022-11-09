import { useEffect } from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Login from './component/Login'
import MainPage from './component/MainPage';
import UserInfo from './component/UserInfo';
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
      {/* <UserInfo></UserInfo> */}
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
