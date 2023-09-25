// Agenda.js
import React from 'react';
import styles from './../styles/Agenda.module.css';
import TituloSecao from '@/components/TituloSecao';

const Agenda = () => {
    return (
        <div className={styles['agenda-container']}>
            <TituloSecao title="Agenda" />
        </div>
    );
};

export default Agenda;
