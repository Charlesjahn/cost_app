import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProjects';
import Projects from './components/pages/Projects';
import EditProject from './components/pages/EditProject'

import Footer from './components/footer/Footer';
import NavBar from './components/header/NavBar';

import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <NavBar />

      <Container customClass="min_height">
        <Routes>
          <Route path="/cost_app" element={<Home />} />

          <Route path="/company" element={<Company />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/newProject" element={<NewProject />} />
          
          <Route path="/projects" element={<Projects />} />
          
          <Route path="/project/:id" element={<EditProject />} />

        </Routes>
      </Container>

      <Footer />

    </Router>
  );
}

export default App;
