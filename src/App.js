import Page from '../src/pages/Page/Page';
import Upload from'../src/pages/Upload/Upload';
import Header from '../src/components/Header/Header';
import './App.scss'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Page />}></Route>
      <Route path='/video/:idFromParams' element={<Page />}></Route>
      <Route path='Upload' element={<Upload />}></Route>
    </Routes>
    </>
  );
}

export default App;
