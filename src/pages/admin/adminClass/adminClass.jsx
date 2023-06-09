import './AdminClass.css'
import NavBar from '../../../components/NavBar/NavBar';
import CardClass from '../../../components/CardClass/CardClass';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
import ModalCreateTest from '../../../components/ModalCreateTest/ModalCreatetest';
import ModalAddStudent from '../../../components/ModalAddStudent/ModalAddStudent';


function AdminClass(){

    // MODAL INFO
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return(
        <div className='body-admin-class'>
            <div className='header'>
                <NavBar></NavBar>
            </div>
            <div className='content-class'>
                <div className='title-class-div'>
                    <div className='back-button-class-div'>
                        <Link to="/adminHome" className='back-button-class-link'>
                            <button className='back-button-class'>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="#233F4F"/>
                                    <path d="M60.1641 70.9375L34.3047 55.4688L33.7578 41.0938L60.0859 24.4531L65.6328 37.7344L46.4922 47.7344L66.5703 57.5L60.1641 70.9375Z" fill="white"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className='title-class'>
                        <h1>s01-T3b-a23</h1>
                    </div>
                    
                </div>
                
                <div className='students-content'>
                    <div className='title-students'>
                        <h2>ALUNOS</h2>
                    </div>
                    <div className='students-list'>
                        <ul>
                            <li>
                                <Link to="/adminStudent" className='button-name-link'>
                                    <button className='button-name'>
                                    Ana Clara Loureiro
                                    </button>
                                </Link>
                            </li>
                            <li>Bruno Meira</li>
                            <li>Lucas de Britto</li>
                        </ul>
                    </div>

                    <div className='button-addstudent-div'>
                            <button onClick={openModal} className='button-addstudent'>
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="50" fill="#233F4F"/>
                                <path d="M43.9531 64.1719L43.875 53.9375L34.1094 53.7812L33.9531 42.0625L43.7188 41.75V32.5312L55.8281 31.2812L55.9844 41.2031L66.2188 40.8906L66.375 54.25L56.1406 54.0938L56.2969 64.3281L43.9531 64.1719Z" fill="white"/>
                            </svg>
                            </button>
                        <ModalAddStudent isOpen={modalIsOpen} closeModal={closeModal} ></ModalAddStudent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminClass;