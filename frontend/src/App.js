import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Homepage from './components/Homepage';
import Adminlogin from './components/Adminlogin';
import Studentlogin from './components/Studentlogin';
import StudentDashboard from './pages/SDashboard'
import StudentProfile from './pages/SProfile'
import StudentCourse from './pages/SCourse'
import StudentResult from './pages/SResult'
import StudentCalGpa from './pages/SGpacal'
import StudentNews from './pages/SNews'


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/adminlogin' element={<Adminlogin />} />
          <Route path='/studentlogin' element={<Studentlogin />} />
          <Route path='/SDashboard' element={<StudentDashboard />} />
          <Route path='/SProfile' element={<StudentProfile />} />
          <Route path='/SCourse' element={<StudentCourse />} />
          <Route path='/SResult' element={<StudentResult />} />
          <Route path='/SGpacal' element={<StudentCalGpa />} />
          <Route path='/SNews' element={<StudentNews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <Router>
// <Routes>
//     <Route path='/student/dashboard' element={<Dashboard/>}/>
//     <Route path='/student/profile' element={<Profile/>}/>
//     <Route path='/student/course' element={<Course/>}/>
//     <Route path='/student/result' element={<Result/>}/>
//     <Route path='/student/gpacal' element={<Gpacal/>}/>
//     <Route path='/student/news' element={<News/>}/>
//   </Routes>
// </Router>
