import React from 'react';
import styles from './../styles/Prontuario.module.css';
import TituloSecao from '@/components/TituloSecao';
import PacienteProntuario from '@/components/PacienteProntuario';

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
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                        <PacienteProntuario foto="https://img.freepik.com/fotos-gratis/happy-optimistic-woman-with-two-hair-buns-dressed-in-jacket-enjoys-free-time-and-walking-in-city-holds-bottle-of-detox-drink_273609-55634.jpg?size=626&ext=jpg" nome="Nome do Paciente" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prontuario;
