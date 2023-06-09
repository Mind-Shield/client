import './ModalInfo.css'
import { Link } from 'react-router-dom';
import React from 'react';
import Modal from 'react-modal';



function ModalInfo({ isOpen, closeModal }){

    return(
        <Modal className="Modal-style" isOpen={isOpen} onRequestClose={closeModal}>
            <div className='body-info'>
                <div className='modal-info'>
                    <div className='title-info'>
                        <h1>Sugestões norteadoras</h1>
                    </div>
                    <div className='text-info'> 
                        <ul>
                            <li>Quais sentimentos você sentiria?  ex: tranquilidade, paciência, raiva, tristeza...</li>
                            <li>Quais ações você tomaria a partir disso?</li>
                            <li>O que você falaria?</li>
                        </ul>
                    </div>
                    <div className='button-close-info-div'>
                        <Link className='link-close-info'>
                            <button onClick={closeModal} className='button-close-info'>fechar</button>
                        </Link>
                    </div>
                    
                </div>
                
            </div>
        </Modal>
    );
};

export default ModalInfo;