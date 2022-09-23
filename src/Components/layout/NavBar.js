import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'
function NavBar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to={"/"}>
                    <img src={logo} alt="Cost_logo"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/empresa">Empresa</Link></li>
                    <li className={styles.item}><Link to="/projectos">Projectos</Link></li>
                    <li className={styles.item}><Link to="/contacto">Contanto</Link></li>
                </ul>
        </Container>
        </nav>
    )

}
export default NavBar