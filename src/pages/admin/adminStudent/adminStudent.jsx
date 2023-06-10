import './AdminStudent.css'
import NavBar from '../../../components/NavBar/NavBar';
import CardClass from '../../../components/CardClass/CardClass';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';


function AdminStudent(){

    return(
        <div className='body-admin-stud'>
            <div className='header'>
                <NavBar></NavBar>
            </div>
            <div className='content-stud'>
                <div className='title-stud-div'>
                    <div className='back-button-stud-div'>
                        <Link to="/adminClass" className='back-button-stud-link'>
                            <button className='back-button-stud'>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="#233F4F"/>
                                    <path d="M60.1641 70.9375L34.3047 55.4688L33.7578 41.0938L60.0859 24.4531L65.6328 37.7344L46.4922 47.7344L66.5703 57.5L60.1641 70.9375Z" fill="white"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className='title-stud'>
                        <h1>Alunos</h1>
                    </div>
                </div>
                
                <div className='stud-content'>
                    <div className='title-stud'>
                        <h2>Ana Clara Loureiro</h2>
                    </div>
                    <div className='stud-list'>
                        <p>TESTES REALIZADOS</p>
                        <ul>
                            <li>Data de realização: 09/06/2023</li>
                            <li>Temática: Escola</li>
                            <li>Resultado médio: Positivo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminStudent;