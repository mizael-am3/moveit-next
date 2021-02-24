import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
   return (
      <div className={styles.challengeBoxContainer}>
         <div className={styles.challengeBoxNotActive}>
            <strong>
               Finalize um ciclo para receber um desafio
               <p>
                  <img src="icons/level-up.svg" alt="Level Up"/>
                  Complete desafios para avançar de Level
               </p>
            </strong>
         </div>
      </div>
   )
}