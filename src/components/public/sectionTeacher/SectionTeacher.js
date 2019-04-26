import React from 'react';
import CardTeacher from './CardTeacher';

export default function({title, data}) {

    function renderTeachers() {
        if(data === undefined)
            return ''
        return  data.map(teacher => (
                    <CardTeacher 
                        key={teacher.nombre} 
                        name={teacher.nombre} 
                        info={teacher.descripcion}/>
                ));
    }

    return(
        <div>
            <h3 className='text-center'>{title}</h3>
            <div className="row justify-content-center my-4">
                {renderTeachers()}
            </div>
        </div>
    )
}