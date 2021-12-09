import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Navbar from './components/navbar/Navbar';
import Save from './pages/save/Save';
import Gallery from './pages/gallery/Gallery';
import Paper from './pages/paper/Paper';
import Contacts from './pages/contacts/Contacts';
import Project from './pages/project/Project';
import ProjectTasks from './components/projectTasks/ProjectTasks';
import ProjectImportant from './components/projectImportant/ProjectImportant';

function App() {
  return (
    <div>
      <Navbar userName="user_1709"/>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/save" element={<Save/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/paper" element={<Paper/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="project" element={<Project />}>
            <Route index path="mytasks" element={<ProjectTasks />}/>
            <Route path="important" element={<ProjectImportant />}/>
            <Route path="ideas" element={<p>Ideas</p>}/>
		      </Route>
          
          
        </Routes>

      </Router>
    </div>
  );
};

export default App;
