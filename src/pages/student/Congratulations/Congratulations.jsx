import './congratulations.css'
import { Link } from 'react-router-dom';



function Congratulations(){

    return(
        <div className='body-cong'>
            <div className='modal-cong'>
                <div className='title-cong'>
                    <h1>PARABÉNS!</h1>
                </div>
                <div className='text-cong'> 
                    <p>Você concluiu a partida dessa semana 🎉</p>
                </div>        
                <div className='text-cong-2'>
                    <p>Pontos adquiridos: 100 xp</p>
                </div>
                <div className='text-cong-2'>
                    <p>Pontuação total: 400 xp</p>
                </div>
                <div className='button-end-div'>
                    <Link className='link-end' to="/StartPage">
                        <button className='button-end'>fechar</button>
                    </Link>
                </div>    
                
                
            </div>
            
        </div>
    );
};

export default Congratulations;