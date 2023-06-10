import './AdminHome.css'
import NavBar from '../../../components/NavBar/NavBar';
import CardClass from '../../../components/CardClass/CardClass';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ModalCreateTest from '../../../components/ModalCreateTest/ModalCreatetest';
import endpointService from '../../../services/endpoints';


function AdminHome(){

    // MODAL INFO
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }


    return(
        <div className='body-admin-home'>
            <div className='header'>
                <NavBar></NavBar>
            </div>
            <div className='content-home'>
                <div className='title-home'>
                    <h1>TURMAS</h1>
                </div>
                <div className='card-home-div'>
                    <CardClass />
                </div>
                <div className='title-home'>
                    <h1>TESTES</h1>
                </div>
                <div className='button-addquestion-div'>
                        <button onClick={openModal} className='button-addquestion'>Adicionar nova pergunta ao jogo</button>
                    <ModalCreateTest isOpen={modalIsOpen} closeModal={closeModal} ></ModalCreateTest>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;