import React, { useState } from 'react';
import styles from '../styles/DictationPage.module.css';
import background from '../assets/dictationBg.png';
import note from '../assets/dictationNote.png';
import { Howl } from 'howler';
import MidBtn from '../assets/midBtn.png';
import { HiSpeakerWave } from "react-icons/hi2";
import { FaQuestionCircle } from "react-icons/fa";

const questions = [
    { audioSrc: '/src/assets/sound/흥창망창.mp3', description: '문제 1 설명', correctAnswer: '안녕하수깡 - 안녕하세요' },
    { audioSrc: '/src/assets/sound/흥창망창.mp3', description: '문제 2 설명', correctAnswer: '안녕하수깡 - 안녕하세요' },
    { audioSrc: '/src/assets/sound/흥창망창.mp3', description: '문제 3 설명', correctAnswer: '안녕하수깡 - 안녕하세요' },
    { audioSrc: '/src/assets/sound/흥창망창.mp3', description: '문제 4 설명', correctAnswer: '안녕하수깡 - 안녕하세요' },
    { audioSrc: '/src/assets/sound/흥창망창.mp3', description: '문제 5 설명', correctAnswer: '안녕하수깡 - 안녕하세요' },
];

const DictationItem = ({ audioSrc, description, correctAnswer, index, showAnswers, resetFlag }) => {
    const [answer, setAnswer] = useState('');

    const handleInputChange = (e) => {
        setAnswer(e.target.value);
    };

    const playAudio = () => {
        const sound = new Howl({
            src: [audioSrc],
            format: ['mp3']
        });
        sound.play();
    };

    // Reset the answer when resetFlag changes
    React.useEffect(() => {
        setAnswer('');
    }, [resetFlag]);

    return (
        <div className={styles.dictationItem}>

            <div className={styles.itemTopContainer}>
                <div className={styles.question}>
                    <span>{index + 1}번 문제: {description}</span>
                </div>
                <div className={styles.soundInput}>
                    <button className={styles.playButton} onClick={playAudio}><HiSpeakerWave/></button>
                    <input
                        type="text"
                        value={answer}
                        onChange={handleInputChange}
                        placeholder="답을 입력하세요"
                        className={styles.input}
                    />
                </div>

            </div>
            {showAnswers && <div className={styles.result}>정답: {correctAnswer}</div>}

        </div>
    );
};

const DictationPage = () => {
    const [showAnswers, setShowAnswers] = useState(false);
    const [resetFlag, setResetFlag] = useState(0);

    const handleShowAnswers = () => {
        setShowAnswers(true);
    };

    const reload = () => {
        setShowAnswers(false);
        setResetFlag(prevFlag => prevFlag + 1);  // Trigger a reset
    };

    return (
        <div className={styles.container} style={{backgroundImage: `url(${background})`}}>
            <div className={styles.note} style={{backgroundImage: `url(${note})`}}>
                <div className={styles.questionIcon}>
                    <FaQuestionCircle/>
                </div>
                <div className={styles.itemContainer}>
                    {questions.map((question, index) => (
                        <DictationItem
                            key={index}
                            audioSrc={question.audioSrc}
                            description={question.description}
                            correctAnswer={question.correctAnswer}
                            index={index}
                            showAnswers={showAnswers}
                            resetFlag={resetFlag}  // Pass the resetFlag to each DictationItem
                        />
                    ))}
                </div>
                <div className={styles.btnConrainer}>
                    <button className={styles.longBtn} style={{backgroundImage: `url(${MidBtn})`}}
                            onClick={handleShowAnswers}><span>정답 확인</span></button>
                    <button className={styles.longBtn} style={{backgroundImage: `url(${MidBtn})`}}
                            onClick={reload}><span>다시 풀기</span></button>
                </div>
            </div>
        </div>
    );
};

export default DictationPage;
