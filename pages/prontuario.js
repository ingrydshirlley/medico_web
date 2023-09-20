import React from 'react';
import styles from './../styles/Prontuario.module.css';
import TituloSecao from '@/components/TituloSecao';

const Prontuario = () => {
    return (
        <div className={styles['prontuario-container']}>
            <TituloSecao title="Gerenciar Prontuários" />

            <div className={styles['prontuarios']}>
                <div className={styles['input-area']}>
                    <input type="text" placeholder='Pesquise um paciente' />
                </div>

                <div className={styles['pacientes']}>
                    <span className={styles['title-pacientes']}>Todos os pacientes:</span>
                    <div className={styles['container']}>
                        <div className={styles['box-paciente']}>s</div>
                        <div className={styles['box-paciente']}>s</div>
                        <div className={styles['box-paciente']}>s</div>
                        <div className={styles['box-paciente']}>s</div>
                        <div className={styles['box-paciente']}>s</div>
                        <div className={styles['box-paciente']}>s</div>
                        <div className={styles['box-paciente']}>s</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prontuario;
