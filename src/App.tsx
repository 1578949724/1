import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Pandas from "@/pages/Pandas";
import CourseDetail from "@/pages/CourseDetail";
import ProjectDetail from "@/pages/ProjectDetail";
import Practice from "@/pages/Practice";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/pandas" element={<Pandas />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/practice/:projectId/:sectionId" element={<Practice />} />
      </Routes>
    </Router>
  );
}
