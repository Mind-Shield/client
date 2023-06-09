import './StartPage.css'
import { Link } from 'react-router-dom';



function StartPage(){

    return(
        <div className='body-startpage'>
            <div className='title-startpage'>
                <h1>Mind Shild</h1>
            </div>
            <div className='button-play-div'>
                <Link to="/Instructions" className='link-start'>
                    <button className='button-play'>PLAY</button>
                </Link>
            </div>
        </div>
    );
};

export default StartPage;