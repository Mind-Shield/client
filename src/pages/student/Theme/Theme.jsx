import './Theme.css'
import { Link } from 'react-router-dom';



function Theme (){

    return(
        <div className='body-theme'>
            <div className='modal-theme'>
                <div className='title-theme'>
                    <h1>Escolha uma temática</h1>
                </div>
               <div className='allchoice-buttons'>
                    <div className='firstItem-Theme'>
                        <div className='button-choice-div'>
                            <Link to="/Instructions" className='link-start'>
                                <button className='button-choice'>amigos</button>
                            </Link>
                        </div>
                        <div className='button-choice-div'>
                            <Link to="/Instructions" className='link-start'>
                                <button className='button-choice'>família</button>
                            </Link>
                        </div>
                    </div>
                    <div className='secondItem-Theme'>
                        <div className='button-choices-div'>
                            <Link to="/School" className='link-start'>
                                <button className='button-choice'>escola</button>
                            </Link>
                        </div>
                        <div className='button-choice-div'>
                            <Link to="/Instructions" className='link-start'>
                                <button className='button-choice'>lazer</button>
                            </Link>
                        </div>
                    </div>
                
               </div>
                <div className='buttons-theme'>
                    <div className='back-div-theme'>
                        <Link to="/Remember">
                            <button className='backbutton-theme'>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill="#233F4F"/>
                                    <path d="M60.1641 70.9375L34.3047 55.4688L33.7578 41.0938L60.0859 24.4531L65.6328 37.7344L46.4922 47.7344L66.5703 57.5L60.1641 70.9375Z" fill="white"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className='go-div-theme'>
                        <Link to="/Theme">
                            <button className='gobutton-theme'>
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

export default Theme;