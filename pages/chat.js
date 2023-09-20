// Chat.js
import React from 'react';
import styles from './../styles/Chat.module.css'; // Importe os estilos do arquivo CSS da página
import ConversaPaciente from '@/components/ConversaPaciente';

const Chat = () => {
    return (
        <div className={styles['chat-container']}>
            <div className={styles['container-pacientes']}>
                <div>
                    <h1>Pacientes</h1>
                    <input type="text" placeholder='Pesquisar um paciente' />

                    <div className={styles['pacientes']}>
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

            <div className={styles['container-conversa']}>
                <h1>aqui vem o chat</h1>
            </div>
        </div>
    );
};

export default Chat;
