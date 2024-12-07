import React from "react";
import "../styles/VoteList.css";

const VoteList = ({ currentPage }) => {
  const itemsPerPage = 6; // 한 페이지당 항목 수
  const dummyData = Array.from({ length: 68 * itemsPerPage }, (_, index) => ({
    id: index + 1,
    title: `제목 ${index + 1}`,
    author: `작성자 ${Math.ceil((index + 1) / itemsPerPage)}`,
    image: "https://via.placeholder.com/150",
  }));

  // 현재 페이지 데이터 필터링
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = dummyData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="vote-list">
      {currentItems.map((vote) => (
        <div className="vote-item" key={vote.id}>
          <img src={vote.image} alt="Board" className="vote-image" />
          <div className="vote-title">{vote.title}</div>
          <div className="vote-author">작성자: {vote.author}</div>
        </div>
      ))}
    </div>
  );
};

export default VoteList;
