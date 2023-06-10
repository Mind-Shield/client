import './CardClass.css'
import { Link } from 'react-router-dom';

function CardClass(){

    return(
        <div className='body-cardclass'>
            <div className='item-cardclass'>
            <div className='name-cardclass'>
                <Link to="/adminClass" >
                    <button className='button-cardclass'>
                            <p>s01-T3b-a23</p>
                    </button>
                </Link>
            </div>
                
               
                
            </div>
            <div className='item-cardclass'>
                <p>s01-T3b-a23</p>
            </div>
            
            
        </div>
    );


};

export default CardClass