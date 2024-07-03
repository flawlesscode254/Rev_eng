import React from 'react';
import Homepage from './components/Homepage/Homepage';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pages from './components/pages/Pages';
import Coursepage from './components/coursepage/Coursepage';
import Pages2 from './components/pages2/Pages2';
import Pages3 from './components/pages3/Pages3';
import Contact from './components/contact/Contact';
import HackathonInfo from './components/HackathonInfo/HackathonInfo';
import Apply from './components/Apply/apply.jsx';
import Admin from './components/Admin Page/Admin.jsx'
import ApplyJobForm from './components/Jobs/ApplyJobForm.jsx'
import JobDetail from './components/Jobs/JobDetail.jsx';
import Partners from './components/Partners/partners.jsx';


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
     
        <Routes>

      
          <Route path='/' element={<Homepage />} />
          <Route path='/pages' element={<Pages />} />
          <Route path='/pages2' element={<Pages2/>} />
          <Route path='/pages3' element={<Pages3/>} />
          <Route path='/coursepage' element={<Coursepage/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/hackathoninfo' element={<HackathonInfo/>} />
          <Route path= '/apply' element={<Apply/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/Apply-Job' element={<ApplyJobForm/>} />
          <Route path='/job/:id' element={<JobDetail/>} />
          <Route path='/partners' element={<Partners/>} />
          
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
