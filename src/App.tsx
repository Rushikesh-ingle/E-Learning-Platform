import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Progress from './pages/Progress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course/:id" element={<CourseDetail />} />
          <Route path="progress" element={<Progress />} />
          <Route path="achievements" element={<div className="p-8 text-center text-gray-600">Achievements page coming soon!</div>} />
          <Route path="schedule" element={<div className="p-8 text-center text-gray-600">Schedule page coming soon!</div>} />
          <Route path="discussions" element={<div className="p-8 text-center text-gray-600">Discussions page coming soon!</div>} />
          <Route path="profile" element={<div className="p-8 text-center text-gray-600">Profile page coming soon!</div>} />
          <Route path="settings" element={<div className="p-8 text-center text-gray-600">Settings page coming soon!</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;