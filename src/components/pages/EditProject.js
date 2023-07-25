import styles from './EditProject.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Project() {

    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjetFrom, setProjectForm] = useState(false)

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)

                // console.log(project.name)
            })
            .catch(err => console.log(err))
    })

    function toggleProjectFrom() {

        setProjectForm(!showProjetFrom)
    }

    return (
        <>
            {project.name ? (

                <div className={styles.project_details}>
                    <Container customClass="column">

                        <div className={styles.details_container}>
                            <h1>Project: {project.name}</h1>

                            <button onClick={toggleProjectFrom}>
                                {!showProjetFrom ? 'Edit' : 'Close'}
                            </button>

                            {!showProjetFrom ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Category: </span>{project.category.name}
                                    </p>
                                    <p>
                                        <span>Total Budget: </span>{project.budget}
                                    </p>
                                    <p>
                                        <span>Total Budget used: </span>€{project.cost}
                                    </p>
                                </div>
                            ) : (

                                <div className={styles.project_info}> detail project</div>

                            )}
                        </div>
                    </Container>
                </div>

            ) : (<Loading />)}
        </>
    )
}

export default Project