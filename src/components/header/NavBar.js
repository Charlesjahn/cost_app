import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Container from '../layout/Container'
import logo from '../../img/costs_logo.png'

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Cost logo" />
                </Link>

                <ul className={styles.list}>
                    <li>
                        <Link to="/cost_app" className={styles.link}>Home</Link>
                    </li>
                    <li>
                        <Link to="/company" className={styles.link}>Company</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={styles.link}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/Projects" className={styles.link}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/newProject" className={styles.link}>NewProject</Link>
                    </li>
                </ul>

            </Container>
        </nav>

    )
}

export default NavBar
