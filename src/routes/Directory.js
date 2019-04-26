import React, {useState, useEffect} from 'react';
import { resize, container } from '../util/resize';
import Title from '../shared/title/Title';
import Footer from '../shared/footer/Footer';
import SectionTeacher from '../components/public/sectionTeacher/SectionTeacher';
import DropdownLic from '../components/public/dropdownLic/DropdownLic';

export default function() {
    const [teacher, setTeacher] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [cont, setCont] = useState('');
    const [showDrop, setShowDrop] = useState(false);
    const [lic, setLic] = useState('administracion');

    useEffect(() => {
        async function getData() {
            const res = await fetch('assets/data/teachers.json');
            const json = await res.json();
            setTeacher(json);
        }
        getData();

        function updateWidth() { resize(setWidth); }
        setCont(container(width));
        window.addEventListener('resize', updateWidth);

        
        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, [width, cont, lic])

    function changeLic(value){
        setLic(value);
    }

    function changeDrop(value){
        setShowDrop(value)
    }

    function renderDrop() {
        if(!showDrop){
            return '';
        }
        return <DropdownLic 
            close={changeDrop}
            lic={changeLic}/>;
    }


    return(
        <div className="page">
            <Title  title='Directorio'/>
            <div className="text-center my-3">
                <button 
                    className='btn btn-sm btn-dark dropdown-toggle'
                    onClick={()=>changeDrop(!showDrop)}>
                    Licenciaturas
                </button>
            </div>
            <div className={cont}>
                {renderDrop()}
                <SectionTeacher
                    title='Administración'
                    data={teacher[lic]}/>
            </div>
            <Footer/>
        </div>
    )
}