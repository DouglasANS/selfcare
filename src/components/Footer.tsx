import styles from '../styles/Footer.module.css';


export function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <li><a href="">Contato</a></li>
                <li><a href="">Temos de serviço</a></li>
                <li><a href="">Politica de privacidade</a></li>
                <li><a href="">Cancelamento, troca, reembolso</a></li>
            </div>
            <div className={styles.right}>
                <div>
                    <h1>Newsletter</h1>
                </div>
                <div>
                    <input type="text"/>
                    <button>Inscrever</button>
                </div>
            </div>
             
        </div>
    )
};
