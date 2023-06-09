import './AdminHome.css'
import NavBar from '../../../components/NavBar/NavBar';
import CardClass from '../../../components/CardClass/CardClass';
import { Link } from 'react-router-dom';

function AdminHome(){

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
                    <CardClass></CardClass>
                </div>
                <div className='title-home'>
                    <h1>TESTES</h1>
                </div>
                <div className='button-addquestion-div'>
                    <Link className='link-addquestion'>
                        <button className='button-addquestion'>Adicionar nova pergunta ao jogo</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;