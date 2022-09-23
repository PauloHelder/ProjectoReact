import styles from './Input.module.css'
function Input({type, text, name, value, placeholder, handleOnChange}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input id={name} 
                type={type} 
                name={name} 
                value={value} 
                onChange={handleOnChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input