import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'

import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaWhatsapp />
                </li>
                <li>
                    <FaGithub />
                </li>
            </ul>
            <p>
                <span className={styles.copy_right_span}>Cost App</span> &copy; 2023
            </p>
        </footer>
    )
}
export default Footer