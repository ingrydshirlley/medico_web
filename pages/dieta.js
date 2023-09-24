import React from 'react';
import styles from './../styles/Dieta.module.css';
import TituloSecao from '@/components/TituloSecao';

const Dieta = () => {
    return (
        <div className={styles['dieta-container']}>
            <TituloSecao title="Gerenciar Dietas" />

            <div className={styles['container-geral']}>
                <div className={styles['container-pacientes']}>
                    <div>
                        <input type="text" />
                    </div>

                    <div>
                        <span>Todos:</span>
                    </div>

                    <div className={styles['box-pacientes']}>
                        <div className={styles['paciente']}>
                            <div className={styles['imagem']}>
                                <img src="https://pps.whatsapp.net/v/t61.24694-24/368209931_7243801052314154_6034206206378626882_n.jpg?ccb=11-4&oh=01_AdQg6bL8L8lq5Ai9aj-tgarmQqrK1Eb-jIcMESiBsTc4Kg&oe=651CB77B&_nc_sid=000000&_nc_cat=103"></img>
                            </div>
                            <div className={styles['nome']}>
                                nomeeeeeeeee
                            </div>
                        </div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                        <div className={styles['paciente']}>oiii</div>
                    </div>
                </div>

                <div className={styles['container-dieta']}>
                    <div className={styles['box-dieta']}></div>
                </div>
            </div>
        </div>
    );
};

export default Dieta;
