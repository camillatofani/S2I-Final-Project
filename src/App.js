/* ==== Containers & Component ==== */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* ==== Containers & Component ==== */
import { HomePage, UpdatePage, LoginPage } from './Pages';
import { Footer } from './Components';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
/* ==== Style ==== */
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={7}>
            <BrowserRouter>
            <ToastContainer />
              <Routes>
                  <Route path='/' element={<LoginPage />} exact />
                  <Route path='/app' element={<HomePage />} exact />
                  <Route path='/update/:id' element={<UpdatePage />} exact />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
