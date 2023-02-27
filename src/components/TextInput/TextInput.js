import styles from './TextInput.module.scss';



const TextInput = props => {
    return <input className={styles.input} placeholder={props.placeholder} type="text" />
}

// const TextInput = () => {
//     return <input className={styles.input} placeholder="Search..." type="text" />
// }

export default TextInput;