import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newprojeect_container}>
            <h1>New Project</h1>
            <p>Create a new project</p>
            <ProjectForm btnText="Create a project"/>
        </div>
    )
}
export default NewProject