import React from 'react';
import CardTeacher from './CardTeacher';

export default function({data}) {

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
            <div className="row justify-content-center my-4">
                {renderTeachers()}
            </div>
        </div>
    )
}