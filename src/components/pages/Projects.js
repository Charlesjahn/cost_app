import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Message from "../layout/Message"
import Container from "../layout/Container"
import Loading from "../layout/Loading"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"

import styles from './Projects.module.css'

function Projects() {
    const [projects, setProjects] = useState([])
    const [removeLoad, setRemoveLoad] = useState(false)
    const [projectMsg, setProjectMsg] = useState('')

    const location = useLocation()
    let message = ''

    console.log(message)

    if (location.state) {
        message = location.state.message

        console.log(message)
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => {
                setProjects(data)
                setRemoveLoad(true)
            })
            .catch((err) => console.log(err))
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then(resp => resp.json)
            .then(data => {
                setProjects(projects.filter((project) => project.id !== id))
                setProjectMsg('Project Deleted')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projects</h1>
                <LinkButton to="/newProject" text="Create a new PROJECT" />
            </div>

            {message && <Message type="success" msg={message} />}

            {projectMsg && <Message type="delete" msg={projectMsg} />}

            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))}
                {!removeLoad && <Loading />}
                {removeLoad && projects.length === 0 && ( <Message type="empty" msg={"0 project saved"}/>)}
            </Container>

        </div>
    )
}
export default Projects