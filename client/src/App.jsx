import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className="w-full">
            <header>
                <Header />
            </header>

            <main className="w-full flex justify-center mt-3">
                <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          {/* Ví dụ: <Route path="/login" element={<Login />} /> */}
          {/* Ví dụ: <Route path="/cart" element={<CartUser />} /> */}
          <Route path="*" element={<div className="text-center">Trang không tồn tại hoặc bạn không có quyền truy cập</div>} />
        </Routes>
                <HomePage />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
