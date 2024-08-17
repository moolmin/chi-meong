import React from 'react';
import { FaCrown } from 'react-icons/fa';
// import LongBtn from '../assets/Longbtn.png';
// import LongBtnClicked from '../assets/Longbtn_clicked.png';
import background from '../assets/mainBg.png';
import styles from '../styles/MainPage.module.css';
import { useNavigate } from 'react-router-dom';
import { FaBook } from "react-icons/fa";

const MainPage = () => {
    const navigate = useNavigate();

    const rankingNavigate = () => {
        navigate('/ranking');
    };

    const proberbNavigate = () => {
        navigate('/proverb');
    };


    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.buttons}>
                {['타자 연습', '받아 쓰기', '제주어 번역'].map((text, index) => {
                    let path = '';
                    if (text === '타자 연습') path = '/game-list';
    
                    if (text === '받아 쓰기') path = '/dictation';
                    if (text === '제주어 번역') path = '/voice';

                    return (
                        <button
                            key={index}
                            className={styles.LongBtn}
                            // style={{ backgroundImage: `url(${LongBtn})` }}
                            onClick={() => handleNavigation(path)}
                        >
                            <p className={styles.LongBtn_text}>{text}</p>
                        </button>
                    );
                })}
                <div className={styles.bottomBtnContainer}>
                <button className={styles.white_box} onClick={rankingNavigate}>
                    <FaCrown />
                    <span>랭킹</span>
                </button>
                <button className={styles.white_box} onClick={proberbNavigate}>
                    <FaBook />
                    <span>속담사전</span>
                </button>
                </div>
                
            </div>
        </div>
    );
};

export default MainPage;
