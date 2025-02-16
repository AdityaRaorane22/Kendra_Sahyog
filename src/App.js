import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import DepartmentDashboard from './components/DepartmentDashboard';
import UserDashboard from './components/UserDashboard';
import CreateProfile from './components/CreateProfile';
import CreateProject from './components/CreateProject';
import ViewProjects from './components/ViewProjects';
import ScheduleMeetings from './components/ScheduleMeetings';
import DiscussionForum from './components/DiscussionForum';
import PublicDashboard from './components/PublicDashboard';
import CrisisManagement from './components/CrisisManagement';
import ResourceRequest from './components/ResourceRequest';
import Resources from './components/Resources';
import ResourceTracker from './components/ResourceTracker';
import ScheduledMeetings from './components/ScheduledMeetings';
import AIRecommendations from './components/AIRecommendations';
import AIPredictions from './components/AIPredictions';
import Analytics from './components/Analytics';
import MapPage from './components/MapPage';
import NoticeBoard from './components/NoticeBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/department" element={<DepartmentDashboard />} />
        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/view-projects" element={<ViewProjects />} />
        <Route path="/schedule-meetings" element={<ScheduleMeetings />} />
        <Route path="/discussion-forum" element={<DiscussionForum />} />
        <Route path="/public-dashboard" element={<PublicDashboard />} />
        <Route path="/crisis-management" element={<CrisisManagement />} />
        <Route path="/resource-request" element={<ResourceRequest />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resource-tracker" element={<ResourceTracker />} />
        <Route path="/scheduled-meetings" element={<ScheduledMeetings />} />
        <Route path="/ai-recommendations" element={<AIRecommendations />} />
        <Route path="/ai-predictions" element={<AIPredictions />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
