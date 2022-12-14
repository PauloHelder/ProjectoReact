import styles from  './Select.module.css'
function Select({name, text, value, options, handleOnChange}){
    return(
        <div className={styles.form_control} >
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
                {Array.isArray(options)
        ? options.map((option) => (
            <option value={option.id} key={option.id}>{option.nome}</option>
        ))
        : <option>Sem Categorias</option>}
                
            </select>
        </div>
    )
}
export default Select