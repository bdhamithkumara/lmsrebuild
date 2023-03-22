import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './components/common/Homepage';
import Adminlogin from './components/admin/Adminlogin';
import Studentlogin from './components/student/Studentlogin';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/admin/adminlogin' element={<Adminlogin/>}/>
          <Route path='/student/studentlogin' element={<Studentlogin/>}/>
          <Route path='' element={<asd/>}/>
          <Route path='' element={<asd/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
