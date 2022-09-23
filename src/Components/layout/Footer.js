import{FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
import Container from './Container'

function Footer(){
    return(
        <footer className={styles.footer}>
            <Container>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p>Costs - <span>&copy; 2022</span></p>
            </Container>
        </footer>
    )

}

export default Footer