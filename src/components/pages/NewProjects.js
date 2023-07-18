import { useNavigate } from 'react-router-dom'

import styles from './NewProjects.module.css'

import ProjectForm from '../project/ProjectForm'

function NewProject() {

    const history = useNavigate()

    function createPost(project) {
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                history('/projects', { state: { message: "Project created" } })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.newprojeect_container}>
            <h1>New Project</h1>
            <p>Create a new project</p>
            <ProjectForm handleSubmit={createPost} btnText="Create a project" />
        </div>
    )
}
export default NewProject