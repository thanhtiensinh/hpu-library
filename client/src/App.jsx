import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';

// QUAN TRỌNG: Bạn cần import thêm các trang chính để web không bị trắng
// Ví dụ: import Login from './Page/Login';
// Ví dụ: import ManagerContact from './Page/Admin/Components/ManagerContact/ManagerContact';

function App() {
  return (
    <div className="w-full">
      <header>
        <Header />
      </header>

      <main className="w-full flex justify-center mt-3">
        <Routes>
          {/* Trang chủ */}
          <Route path="/" element={<HomePage />} />
          
          {/* Tự động sửa lỗi khi bị nhảy về index.html */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />

          {/* Bạn hãy thêm các Route cho Login và Admin tại đây */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/manager" element={<ManagerContact />} /> */}

          {/* Trang thông báo nếu vào nhầm link */}
          <Route path="*" element={<div className="py-20 text-center">Trang web đang được tải hoặc không tồn tại...</div>} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
