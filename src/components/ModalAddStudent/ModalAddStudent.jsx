import './ModalAddStudent.css'
import { Link } from 'react-router-dom';
import React from 'react';
import Modal from 'react-modal';



function ModalAddStudent({ isOpen, closeModal }){

    return(
        <Modal overlayClassName="overlay-color-add" className="Modal-style" isOpen={isOpen} onRequestClose={closeModal}>
            <div className='body-modal-add'>
                <div className='modal-add'>
                    <div className='title-modal-add'>
                        <h1>Cadastrar aluno</h1>
                    </div>
                    <div className='text-modal-add'> 
                        <div className='label-add'>
                            <label>Nome Completo:</label>
                            <input placeholder="Nome completo do aluno" className="input-add-test" type="text" />
                       </div>
                        <div className='label-add'>
                            <label>RA:</label>
                            <input placeholder="Registro Acadêmico do aluno" className="input-add-test" type="text" />
                        </div>
                        <div className='label-add'>
                            <label >Turma:</label>
                            <input placeholder="Turma do aluno" className="input-add-test" type="text" />
                        </div>
                        <div  className='label-add'>
                            <label >Email:</label> 
                            <input placeholder="Email institucional do aluno" className="input-add-test" type="text" />
                       
                        </div>
                        <div  className='label-add'>
                            <label>Senha</label>
                            <input placeholder="Senha para o login do aluno na plataforma" className="input-add-test" type="text" />
                        </div>
                        
                    </div>

                    <div className='button-cadastro-div'>
                        <Link className='link-cadastro'>
                            <button onClick={closeModal} className='button-cadastro'>ADICIONAR</button>
                        </Link>
                    </div>
                    
                </div>
                
            </div>
        </Modal>
    );
};

export default ModalAddStudent;