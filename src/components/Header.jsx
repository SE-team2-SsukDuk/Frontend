import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../assets/Mypage_Btn.svg"; // 마이페이지 버튼 아이콘
import HomeIcon from "../assets/Home.png"; // 홈 버튼 아이콘
import SearchBar from "./SearchBar"; // SearchBar 컴포넌트 import

import "../styles/style.css";
import "../styles/styleguide.css";

const Header = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const goToMyPage = () => {
    navigate("/mypage"); // "/mypage" 경로로 이동
  };

  const goToCreateBoardPage = () => {
    navigate("/create-board"); // "/create-board" 경로로 이동
  };

  const goToHome = () => {
    navigate("/"); // "/" 경로로 이동
  };

  const goToFinishedPolls = () => {
    navigate("/finished-polls"); // "/finished-polls" 경로로 이동
  };

  return (
    <header className="header">
        <div className="icon-container">
        {/* 마이페이지 버튼 */}
            <div className="mypage-btn" onClick={goToMyPage}>
                <ProfileIcon className="icon" />
            </div>
            {/* 홈 버튼 */}
            <div className="home-btn" onClick={goToHome}>
                <img src={HomeIcon} alt="홈" className="icon" />
            </div>
        </div>

      {/* 검색 바 */}
      <SearchBar /> {/* 독립적인 SearchBar 컴포넌트 추가 */}

      {/* 보드 생성 버튼 */}
      <button className="div-wrapper" onClick={goToCreateBoardPage}>
        <div className="state-layer">
          <div className="label-text">보드 생성 +</div>
        </div>
      </button>
    </header>

  );
};

export default Header;



