import {  useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown(){
    const { 
        hasFinished, 
        minutes, 
        resetCoutdown, 
        isActive, 
        seconds, 
        startCountdown
    } = useContext(CountdownContext);    

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    
    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>

            </div>

            { hasFinished ? (
                <button
                    disabled 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={resetCoutdown}    
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCoutdown}    
                        >
                            Abandonar ciclo
                    </button>

                    ) : (
                        <button 
                            type="button" 
                            className={styles.countdownButton}
                            onClick={startCountdown}    
                        >
                            Iniciar um ciclo
                        </button>      
                    )}
                </>
            )}
        </div>
    );
}