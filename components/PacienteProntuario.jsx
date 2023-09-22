import styles from './../styles/Prontuario.module.css';

const PacienteProntuario = ({ foto, nome }) => {
    return (
        <div className={styles['box-paciente']}>
            <div className={styles['img-box-div']}>
                <img className='img' src={foto} alt={`Foto de ${nome}`} />
            </div>

            <div className={styles['nome']}>
                {nome}
            </div>
        </div>
    );
};

export default PacienteProntuario;