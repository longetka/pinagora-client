import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Navbar from './components/navbar/Navbar';
import Save from './pages/save/Save';
import Gallery from './pages/gallery/Gallery';
import Paper from './pages/paper/Paper';
import Contacts from './pages/contacts/Contacts';
import Project from './pages/project/Project';
// import ProjectTodo from './components/projectTodo/ProjectTodo';


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
            <Route path="mytasks" element={<p>MyTasks</p>}/>
            <Route path="important" element={<p>Important</p>}/>
            <Route path="ideas" element={<p>Ideas</p>}/>
			      {/* <Route path="/project/mytasks" element={}/> */}
		      </Route>
          
          
        </Routes>

      </Router>
    </div>
  );
};

export default App;
