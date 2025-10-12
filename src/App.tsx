import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import UploadFileDropPage from './components/pages/UploadFileDropPage';
import UploadProgressPage from './components/pages/UploadProgressPage';
import ReportPage from './components/pages/ReportPage';
import UploadCompletePage from './components/pages/UploadCompletePage';
import TestProgressPage from './components/pages/TestProgressPage';
import TestCompletePage from './components/pages/TestCompletePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/upload" element={<UploadFileDropPage />} />
        <Route path="/uploading" element={<UploadProgressPage />} />
        <Route path="/uploaded" element={<UploadCompletePage />} />
        <Route path="/testing" element={<TestProgressPage />} />
        <Route path="/tested" element={<TestCompletePage />} />
        <Route path="/reports" element={<ReportPage />} />
        <Route path="*" element={<Navigate to="/upload" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
