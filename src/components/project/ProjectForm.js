import styles from './ProjectForm.module.css'
import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitBNT from '../Form/SubmitBTN'

function ProjectForm({btnText}) {

    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Project's name"
                name="name"
                placeholder="Project's name:"
            />
            <Input
                type="number"
                text="Project's budget"
                name="budget"
                placeholder="Budget:"
            />
            <Select
                name="category_id"
                text="Select category"
            />
            <SubmitBNT text={btnText} />
        </form>
    )
}

export default ProjectForm