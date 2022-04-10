import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {AuthContext} from './context/AuthContext';
import {useAuth} from './hooks/AuthHook';
import Main from './pages/main/Main';
import Navbar from './components/navbar/Navbar';
import Save from './pages/save/Save';
import Gallery from './pages/gallery/Gallery';
import Paper from './pages/paper/Paper';
import Contacts from './pages/contacts/Contacts';
import Project from './pages/project/Project';
import ProjectTasks from './components/projectTasks/ProjectTasks';
import ProjectImportant from './components/projectImportant/ProjectImportant';
import ProjectIdeas from './components/projectIdeas/ProjectIdeas';
import MapPage from './pages/map/MapPage';
import Browser from './pages/browser/Browser';
import Job from './pages/job/Job';
import Games from './pages/games/Games';
import Chat from './pages/chat/Chat';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';

function App() {
    let {login, logOut, token, userId, isReady} = useAuth();
    let isLogin = !!token;

  return (
      <AuthContext.Provider value={
          {login, logOut, token, userId, isReady, isLogin}
      }>
        <div>
          <Router>
            <Navbar userName={userId} isLogin={isLogin}/>
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/save" element={<Save/>} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/paper" element={<Paper/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="project" element={<Project />}>
                <Route index path="mytasks" element={<ProjectTasks />}/>
                <Route path="important" element={<ProjectImportant />}/>
                <Route path=":id" element={<ProjectIdeas />}/>
              </Route>
              <Route path="/map" element={<MapPage />}/>
              <Route path="/web" element={<Browser />} />
              <Route path="/job" element={<Job />} />
              <Route path="/games" element={<Games />} />
              <Route path="/family" element={<Chat />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />}/>
              <Route path="/settings" element={<Settings />} />
            </Routes>

          </Router>
        </div>
      </AuthContext.Provider>
  );
};

export default App;
