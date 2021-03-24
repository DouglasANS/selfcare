import styles from '../styles/Final.module.css';

export function Final(){
    return(
        <div className={styles.container}>
             <div className={styles.left}>
                <li><a href="" className={styles.um}></a></li>
                <li><a href="" className={styles.dois}></a></li>
             </div>

             <div className={styles.right}>
                <li><a href="1" className={styles.tres}></a></li>
                <li><a href="2" className={styles.quatro}></a></li>
                <li><a href="3" className={styles.cinco}></a></li>
             </div>
        </div>
    )
};