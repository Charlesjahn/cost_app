import { useEffect, useState } from 'react'

import styles from './ProjectForm.module.css'

import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitBTN from '../Form/SubmitBTN'

function ProjectForm({ btnText }) {

    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

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
                options={categories}
            />
            <SubmitBTN text={btnText} />
        </form>
    )
}

export default ProjectForm