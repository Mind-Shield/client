import './congratulations.css'
import { Link } from 'react-router-dom';



function Congratulations(){

    return(
        <div className='body-cong'>
            <div className='modal-cong'>
                <div className='title-cong'>
                    <h1>parabéns</h1>
                </div>
                <div className='text-cong'> 
                    <p>Você concluiu a partida dessa semana!</p>
                </div>        
                <div className='text-cong-2'>
                    <p>Pontos adquiridos:</p>
                    <p>Pontuação total:</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default Congratulations;