import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexComponent from "./components/index.jsx";
import MyPage from "./components/MyPage.jsx"; // 마이페이지 컴포넌트
import CreateBoard from "./components/CreateBoard.jsx"; // 보드 생성 컴포넌트
import FinishedPolls from "./components/FinishedPolls.jsx"; // 완료된 투표 컴포넌트
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 기본 페이지 */}
          <Route path="/" element={<IndexComponent />} />

          {/* 마이페이지 */}
          <Route path="/mypage" element={<MyPage />} />

          {/* 보드 생성 */}
          <Route path="/create-board" element={<CreateBoard />} />
          {/* 완료된 투표 */}
          <Route path="/finished-polls" element={<FinishedPolls />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
