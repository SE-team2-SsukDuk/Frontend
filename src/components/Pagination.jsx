import React from "react";
import "../styles/Pagination.css";
import { useNavigate } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const goToFinishedPolls = () => {
    navigate("/finished-polls"); // "/finished-polls" 경로로 이동
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // "이전" 버튼
    if (currentPage > 1) {
      pageNumbers.push(
        <button
          key="prev"
          className="pagination-arrow"
          onClick={() => onPageChange(currentPage - 1)}
        >
          ← 이전
        </button>
      );
    }

    // 페이지 번호
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pageNumbers.push(
          <button
            key={i}
            className={`pagination-number ${
              i === currentPage ? "active" : ""
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageNumbers.push(
          <span key={`gap-${i}`} className="pagination-gap">
            ...
          </span>
        );
      }
    }

    // "다음" 버튼
    if (currentPage < totalPages) {
      pageNumbers.push(
        <button
          key="next"
          className="pagination-arrow"
          onClick={() => onPageChange(currentPage + 1)}
        >
          다음 →
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <div className="pagination">{renderPageNumbers()}</div>

      {/* 종료된 투표 목록 버튼 섹션 */}
      <div className="finished-polls-section">
        <span className="finished-polls-text">다른 투표 결과가 궁금하다면?</span>
        <button className="finished-polls-button" onClick={goToFinishedPolls}>
          결과 보러가기
        </button>
      </div>
    </div>
  );
};

export default Pagination;
