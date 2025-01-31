import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentsPage from "./pages/StudentsPage";
import AddStudentModal from "./components/AddStudentModal";
import Logout from "./components/Logout";


const App = () => {
  return (
    <Router>
      
      <div className="bg-gray-50 min-h-screen">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/add-student" element={<AddStudentModal />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
