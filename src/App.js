import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Topbar from './components/Topbar';
import { BrowserRouter,Routes,Route,Links } from 'react-router-dom';
import Error from './components/Error';
import Beauty from './components/Beauty';
import Home from './components/Home';
import Appliances from './components/Appliances';
import Deals from './components/Deals';
import Electronics from './components/Electronics';
import Fashion from './components/Fashion';
import Furniture from './components/Furniture';
import Groceries from './components/Groceries';
import Mobiles from './components/Mobiles';
import More from './components/More';
import Prime from './components/Prime';
import Travel from './components/Travel';


function App() {
    const a='Welcome to this page'
    const b='Thanks for Visiting'




  return (
    <div className='container-fluid main'>
      <div className='row'>
        <BrowserRouter>
         <Topbar/>
        <Routes>
          <Route path='*' element={ <Error a1={a} a2={b}/> }></Route>
          <Route path='/' element={ <Content/>}></Route>
          <Route path='/Beauty' element={ <Beauty a1={a} a2={b}/>}></Route>
          <Route path="Home" element={<Home/>}></Route>
          <Route path='Travel' element={<Travel/>}></Route>
          <Route path='Deals' element={<Deals/>}></Route>
          <Route path='Mobiles' element={<Mobiles/>}></Route>
          <Route path='Fashion' element={<Fashion/>}></Route>
          <Route path='Prime' element={<Prime/>}></Route>
          <Route path='Electronics' element={<Electronics/>}></Route>
          <Route path='Groceries' element={<Groceries/>}></Route>
          <Route path='Appliances' element={<Appliances a1={a} a2={b}/>}></Route>
          <Route path='Furniture' element={<Furniture/>}></Route>
          <Route path='More' element={<More/>}></Route>



        </Routes>
       
      </BrowserRouter>
       
      
      </div>
    </div>
  );
}

export default App;
