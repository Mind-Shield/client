import './CardClass.css'
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import endpointService from '../../services/endpoints';
import studentsClassCtx from '../../context/classId-ctx';
import { useNavigate } from 'react-router-dom';

function CardClass(){
    const navigate = useNavigate();
    const [classes,setClasses]= useState();
    const [students,setStudentss]= useState();
    const { studentsHandler } = useContext(studentsClassCtx);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const responseGet = await endpointService.getClasses();
            setClasses(responseGet.data);
            } catch (err) {
            console.error('Error in GET request:', err);
            }
        };

        fetchData();
        }, []);

    const seeClasse = async (classId) => {
        try {
        const responseGet = await endpointService.getStudentsClasses(classId);
        setStudentss(responseGet.data);
        studentsHandler(students)
        navigate("/AdminClass", { replace: true })
        } catch (err) {
        console.error('Error in GET request:', err);
        }
    }

    return(
        <div className='body-cardclass'>
            {classes ? (
                classes.map((classe, i) => {
                return (
                    <div key={i} className='item-cardclass'>
                        <div className='name-cardclass'>
                            <button onClick={() => seeClasse(classe.id)} className='button-cardclass'>
                                <p>{classe.grade} {classe.identifier}</p>
                            </button>
                        </div> 
                    </div> 
                );
                })
            ) : (
                <p>Loading...</p>
            )}       
        </div>
    );


}

export default CardClass