import styles from '../styles/Footer.module.css';


export function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <li><a href="1">Contato</a></li>
                <li><a href="2">Temos de serviço</a></li>
                <li><a href="3">Politica de privacidade</a></li>
                <li><a href="4">Cancelamento, troca, reembolso</a></li>
            </div>
            <div className={styles.right}>
                <div>
                    <h1>Newsletter</h1>
                </div>
                <div>
                    <input type="text" placeholder="Digite seu melhor e-mail"/>
                    <button>Inscrever</button>
                </div>
            </div>
             
        </div>
    )
};
