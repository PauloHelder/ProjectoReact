import ProjectoForm from '../Projejcto/ProjectoForm'
import styles from './NovoProjecto.module.css'
function NovoProjecto(){
    return(
        <div className={styles.novoprojecto_cotainer} >
            <h1>Novo Projecto</h1>
            <p>Cria aqui os seus Projectos para depois adicionar os custos</p>
            <ProjectoForm btnText="Criar Formulario" />
        </div>
    )
}
export default NovoProjecto