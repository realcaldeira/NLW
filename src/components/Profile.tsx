import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile(){

    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/realcaldeira.png" alt="Lucas da Costa"/>
            <div>
                <strong>Lucas da Costa</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
                
            </div>
        </div>
    );
}