import React from 'react';
import styles from './../styles/Dieta.module.css';
import TituloSecao from '@/components/TituloSecao';
import ConversaPaciente from '@/components/ConversaPaciente';
const Dieta = () => {
    return (
        <div className={styles['dieta-container']}>
            <TituloSecao title="Gerenciar Dietas" />

            <div className={styles['container-geral']}>
                
                <div className={styles['container-pacientes']}>
                    <div className={styles['pacientes-container']}>
                        <input type="text" placeholder='Pesquisar um paciente' />

                        <div className={styles['pacientes']}>
                            <ConversaPaciente />
                            <ConversaPaciente />
                            <ConversaPaciente />
                            <ConversaPaciente />
                            <ConversaPaciente />
                            <ConversaPaciente />
                            <ConversaPaciente />
                            <ConversaPaciente />
                        </div>
                    </div>
                </div>

                {/* <div className={styles['container-conversa']}>

                </div> */}
            </div>
        </div>
    );
};

export default Dieta;
