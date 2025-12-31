import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Login from './Page/Login';
// Thêm trang quản lý của bạn vào đây
import ManagerContact from './Page/Admin/Components/ManagerContact/ManagerContact';

function App() {
  return (
    <div className="w-full">
      <header>
        <Header />
      </header>

      <main className="w-full flex justify-center mt-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          
          {/* Thêm Route cho manager để không bị trắng trang */}
          <Route path="/manager" element={<ManagerContact />} />

          {/* Sửa lỗi tự nhảy về index.html */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          
          {/* Bẫy tất cả các đường dẫn sai về trang chủ */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
