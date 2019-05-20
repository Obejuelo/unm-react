import React,{useState} from 'react';
import SpinnerWaith from '../../shared/private/SpinnerWaith';

export default function({notice, editNotice, setOption, spinner}) {
    const titleRef = new React.createRef();
    const infoRef = new React.createRef();
    const [title, setTitle] = useState(notice.title);
    const [info, setInfo] = useState(notice.info);

    const sendNotice = (e) => {
        e.preventDefault();
        let body = {title, info, date: new Date()}
        editNotice(notice._id, body);
    }

    const changeOption = (e) => {
        e.preventDefault();
        setOption('new-entry');
    }

    return(
        <div className="widget nueva_entrada">
            <h3 className="titulo">Editar ({notice.title})</h3>
            <form onSubmit={sendNotice}>
                <input 
                    type="text" 
                    placeholder="Titulo"
                    value={title}
                    onChange={() => setTitle(titleRef.current.value)}
                    ref={titleRef}
                    required/>
                <textarea 
                    placeholder="Info"
                    value={info}
                    onChange={() => setInfo(infoRef.current.value)}
                    ref={infoRef}
                    required>
                </textarea>
                <div className="d-flex justify-content-end">
                    <button 
                        className='icon-cancel'
                        onClick={changeOption}>Cancelar</button>
                    <button>Editar</button>
                </div>
            </form>
            {spinner ? <SpinnerWaith/> : ''}
        </div>
    )
}