import logo from './logo.svg';
import './App.css';
import Test03 from './components/test/TestCom03';
import { Route, Routes } from 'react-router-dom';
import LoginCon from './containers/LoginCon';
import IndexCon from './containers/IndexCon';
import RegisterCon from "./containers/RegisterCon";
import MemberListCon from "./containers/MemberListCon";
import MemberDetailCon from "./containers/MemberDetailCon";
import UpdateCon from "./containers/UpdateCon";

function App() {
  return (<>
    <Routes>
      <Route path='/' element={<IndexCon />} />
      <Route path='/login' element={<LoginCon />} />
      <Route path="/register" element={<RegisterCon />} />
      <Route path="/list" element={<MemberListCon />} />
      <Route path="/detail/:username" element={<MemberDetailCon />} />
      <Route path="/update/:username" element={<UpdateCon />} />
    </Routes>

    {/* 
    <Test03 test={"안녕하세요"} />
  */}
  </>);
}

export default App;
