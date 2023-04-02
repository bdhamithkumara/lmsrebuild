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
import ADashboard from './pages/ADashboard';
import AAddResult from './pages/AAddResult'
import AAddCourses from './pages/AAddCourses'
import AAddNews from './pages/AAddNews'
import ACreateUserAcc from './pages/ACretateUAcc'
import LectureDashboard from './pages/Ldashboard'
import LMain from './pages/LMain'
import LClassWork from './pages/LClassWork';

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
          <Route path='/ADashboard' element={<ADashboard />} />
          <Route path='/AddResult' element={<AAddResult />} />
          <Route path='/AddCourses' element={<AAddCourses />} />
          <Route path='/AddNews' element={<AAddNews />} />
          <Route path='/ACreateUserAcc' element={<ACreateUserAcc />} />
          <Route path='/Ldashboard' element={<LectureDashboard />} />
          <Route path='/LMain' element={<LMain />} /> 
          <Route path='/LClassWorks' element={<LClassWork />} />

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
