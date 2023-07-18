import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa'

import styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href='https://www.instagram.com/cfjahnprojects/'>
                        <FaInstagram /></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/charles-franklin-jahn/'>
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href='https://wa.me/353834601235'>
                        <FaWhatsapp />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/Charlesjahn'>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href='mailto:charles.jahn@gmail.com?subject=&body='>
                        <FaEnvelope />
                    </a>
                </li>
            </ul>
            <p>
                <span className={styles.copy_right_span}>Cost App</span> &copy; 2023
            </p>
        </footer>
    )
}
export default Footer