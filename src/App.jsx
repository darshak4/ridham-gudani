import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pulse from './pages/Pulse';
import PulseDetail from './pages/PulseDetail';
import Event from './pages/Event';
import Connect from './pages/Connect';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pulse" element={<Pulse />} />
          <Route path="pulse/:id" element={<PulseDetail />} />
          <Route path="event" element={<Event />} />
          <Route path="connect" element={<Connect />} />
          {/* Fallback to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

