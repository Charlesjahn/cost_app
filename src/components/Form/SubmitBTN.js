import styles from './SubmitBTN.module.css'

function SubmitBTN({ text }) {

    return (
        <div >
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitBTN