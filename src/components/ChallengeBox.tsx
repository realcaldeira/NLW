import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

import Lottie from 'react-lottie';
import animationData from '../lotties/arrow-animation.json';

export function ChallengeBox() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCoutdown } = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCoutdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCoutdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>

                        <footer>
                            <button 
                                type="button"
                                className={styles.challengeFailedButton}
                                onClick={handleChallengeFailed}
                                >
                                Falhei
                            </button>

                            <button type="button"
                                    className={styles.challengeSucceededButton}
                                    onClick={handleChallengeSucceeded}
                                    >
                                Completei
                            </button>
                        </footer>
                    </main>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Inicie um ciclo para receber desafios a serem completados </strong>
                <p>
                <Lottie 
                    options={defaultOptions}
                    height={100}
                    width={100}
                />
                    Avance de level completando os desafios.
                </p>
            </div>
            )}
            
        </div>
    )
}