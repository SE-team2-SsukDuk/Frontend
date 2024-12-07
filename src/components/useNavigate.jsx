import { useNavigate } from 'react-router-dom';

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

export { goToMyPage, goToCreateBoardPage, goToHome, goToFinishedPolls };
