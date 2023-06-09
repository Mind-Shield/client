import './ModalCreateTest.css'
import { Link } from 'react-router-dom';
import React from 'react';
import Modal from 'react-modal';



function ModalCreateTest({ isOpen, closeModal }){

    return(
        <Modal overlayClassName="overlay-color-create" className="Modal-style" isOpen={isOpen} onRequestClose={closeModal}>
            <div className='body-modal-create'>
                <div className='modal-create'>
                    <div className='title-modal-create'>
                        <h1>Adicionar pergunta</h1>
                    </div>
                    <div className='text-modal-create'> 
                        <div className='label-create'>
                            <label>Faixa Etária:</label>
                        </div>
                        <div>
                            <input placeholder="Ensino Medio ou Ensino Fundamental" className="input-create-test" type="text" />
                        </div>
                        <div className='label-create'>
                            <label>Temática:</label>
                        </div>
                        <div>
                            <input placeholder="Amigos, Familia, Escola ou Lazer" className="input-create-test" type="text" />
                        </div>
                        <div>
                            <label  className='label-create'>Pergunta/Situação:</label>
                        </div>
                        <div>
                            <input placeholder="Digite aqui a pergunta que deseja adicionar" className="input-create-test" type="text" />
                        </div>
                        
                    </div>

                    <div className='button-add-quastion-div'>
                        <Link className='link-add-quastion'>
                            <button onClick={closeModal} className='button-add-quastion'>ADICIONAR</button>
                        </Link>
                    </div>
                    
                </div>
                
            </div>
        </Modal>
    );
};

export default ModalCreateTest;