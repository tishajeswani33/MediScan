import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
import MedicineDetailsPage from './pages/MedicineDetailsPage';
import SearchPage from './pages/SearchPage';
import BookmarksPage from './pages/BookmarksPage';
import ConsultationPage from './pages/ConsultationPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/medicine/:id" element={<MedicineDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;