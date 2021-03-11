import styles from '../styles/Headertop.module.css';


export function Headercima(){
    return(
        <div className={styles.container}>
             <div className={styles.left}>
                <h1>selfcare</h1>
             </div>
             <div className={styles.right}>
                <li><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
             </div>
        </div>
    )
};
