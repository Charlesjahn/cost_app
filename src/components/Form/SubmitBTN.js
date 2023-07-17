import styles from './SubmitBNT.module.css'

function SubmitBNT({ text }) {

    return (
        <div >
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitBNT