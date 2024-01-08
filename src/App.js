import Main from './components/pages/Main/Main';
import Upload from'./components/pages/Upload/Upload';
import Header from '../src/components/Header/Header';
import './App.scss'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/video/:idFromParams' element={<Main />}></Route>
      <Route path='Upload' element={<Upload />}></Route>
    </Routes>
    </>
  );
}

export default App;
