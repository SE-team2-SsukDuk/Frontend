import React, { useState } from "react";
import { ReactComponent as MenuIcon } from "../assets/Menu.svg"; // 메뉴 아이콘
import { ReactComponent as SearchIcon } from "../assets/Search.svg"; // 검색 아이콘
import "../styles/style.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState(""); // 검색 입력값 관리

  const handleInputChange = (event) => {
    setSearchText(event.target.value); // 입력값 업데이트
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // 기본 동작(페이지 새로고침) 방지
    console.log("검색어:", searchText); // 검색어를 처리
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit} className="search-form">
        {/* 메뉴 아이콘 */}
        <MenuIcon className="menu-icon" />
        {/* 검색 입력 필드 */}
        <input
          type="text"
          className="search-input"
          placeholder="보드 이름으로 찾기!"
          value={searchText}
          onChange={handleInputChange}
        />
        {/* 검색 버튼 */}
        <button type="submit" className="search-button">
          <SearchIcon className="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
