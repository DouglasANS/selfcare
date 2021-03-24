import styles from '../styles/Headertop.module.css';


export function Headercima(){
    return(
        <div className={styles.container}>
             <div className={styles.left}>
                <img src="/selflogo.png" alt=""/>
             </div>
             <div className={styles.right}>
                <li><a href="1" className={styles.um}></a></li>
                <li><a href="2" className={styles.dois}></a></li>
                <li><a href="3" className={styles.tres}></a></li>
             </div>
        </div>
    )
};
