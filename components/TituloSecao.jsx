import React from 'react';
import styles from './../styles/Perfil.module.css';

const TituloSecao = ({ title }) => {
    return (
        <div className={styles['perfil-header']}>
            {title}
        </div>
    );
};

export default TituloSecao;