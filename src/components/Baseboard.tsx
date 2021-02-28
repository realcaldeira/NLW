import styles from '../styles/components/Baseboard.module.css';

import Lottie from 'react-lottie';
import animationData from '../lotties/cell-integrity-brain-5-stars.json';

export function Baseboard(){

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
            <div className={styles.rodape}>
                <Lottie 
                    options={defaultOptions}
                    height={50}
                    width={50}
                />
                
                <div className={styles.menu}>
                    <img src="home.svg"/>
                    <img src="award.svg"/>
                </div>
            </div>
        
    )
}