import React, { useState } from "react";

import "../styles/style.css";
import "../styles/styleguide.css";

import Header from "./Header";
import VoteList from "./VoteList";
import Pagination from "./Pagination";

const IndexComponent = () => {
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const totalPages = 68; // 총 페이지 수

  // 페이지 변경 핸들러
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-title-container">
        <h1 className="main-title">진행중인 투표</h1>
      </div>
      {/* 현재 페이지에 따라 목록 업데이트 */}
      <VoteList currentPage={currentPage} />
      {/* 페이지네이션 컴포넌트 */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default IndexComponent;
