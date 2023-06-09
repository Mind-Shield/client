import './Instructions.css'
import { Link } from 'react-router-dom';



function Instructions(){

    return(
        <div className='body-instructions'>
            <div className='modal-inst'>
                <div className='title-inst'>
                    <h1>Instruções</h1>
                </div>
                <div className='text-inst'> 
                    <ul>
                        <li>Você irá se deparar com situações imaginárias, e terá que descrever como você reagiria a elas.</li>
                        <li>Você receberá algumas sugestões norteadoras para suas respostas, mas você estará livre para falar sobre possíveis sentimentos e reações;</li>
                    </ul>
                </div>        
                <div className='buttons-inst'>
                    <div className='back-div-inst'>
                        <Link to="/StartPage">
                            <button className='backbutton-inst'>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="#233F4F"/>
                                    <path d="M60.1641 70.9375L34.3047 55.4688L33.7578 41.0938L60.0859 24.4531L65.6328 37.7344L46.4922 47.7344L66.5703 57.5L60.1641 70.9375Z" fill="white"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className='go-div-inst'>
                        <Link to="/Remember">
                            <button className='gobutton-inst'>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="#233F4F"/>
                                    <path d="M39.2812 73.9375L33.6562 60.5L52.875 50.5L32.875 40.7344L39.2031 27.4531L65.0625 42.7656L65.6875 57.2188L39.2812 73.9375Z" fill="white"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Instructions;