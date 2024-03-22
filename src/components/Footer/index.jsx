import Whatszapp from '../../assets/whatsapp-icon.png';
import Linkedin from '../../assets/linkedin-icon.png';
import GitHub from '../../assets/github-icon.png';
import styles from './style.module.css';


export const Footer = () => {
    return (
        <>
            <hr/>
            <footer className={styles.footer}>
                <h2 className="title2">Contato</h2>
                <p className="title3">Todos os direitos reservados - Robson Costa</p>
                <div>
                    <img src={Whatszapp} alt="Logo do whatsapp"/>
                    <img src={Linkedin} alt="Logo do Linkedin"/>
                    <img src={GitHub} alt="Logo do GitHub"/>
                </div>
                <hr/>
            </footer>
        </>
    )
}