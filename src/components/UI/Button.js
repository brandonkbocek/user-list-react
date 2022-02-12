import React from 'react';
import styles from './Button.module.css'

const Button = props => {
// type="props.type" means any component that uses this button component can set their own type implementation
// or it will be 'button' type by default
    return (
        <button type={props.type || 'button'} 
        className={styles.button} 
        onClick={props.onClick}
        >{props.children}</button>
    );

}

export default Button;