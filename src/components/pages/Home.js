import styles from './Home.module.css'
import saving from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to <span>Cost App</span></h1>
            <p>An App to manage the costs of your projects!</p>
            <LinkButton to="/newProject" text="Create a new PROJECT"/>
            <img src={saving} alt="Costs IMG" />

        </section>
    )
}
export default Home