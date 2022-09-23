import { useEffect, useState } from 'react'
import styles from './ProjectoForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectoForm({btnText}){
    const[categorias,setCategorias] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/categorias",{
        method:"GET",
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then((resp) => resp.json())
        .then((data) => {setCategorias(data)})
        .catch((err) => console.log(err))
    },[])
    
    return(
        <div>
            <p>Novo  Projecto</p>
            <form className={styles.form}>
            <Input type="text" placeholder='Nome do Projecto' name='nome' text="Nome do Projecto"/>
            <Input type="number" placeholder='Orçamento do Projectoo' name='budget' text="Orçamento do Projecto"/>
            <Select name='category_id' text="Categoria do Projecto" options={categorias}/>
            <SubmitButton text={btnText}/>
            </form>
        </div>

    )
}

export default ProjectoForm