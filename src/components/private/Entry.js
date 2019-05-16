import React, {useState} from 'react';
import SpinnerWaith from '../../shared/private/SpinnerWaith';
import AlertSuccess from '../../shared/private/AlertSuccess';

export default function({sendNew, spinner, alert}) {
    const titleRef = new React.createRef();
    const infoRef = new React.createRef();
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');
    // const [file, setFile] = useState(new FormData());

    const news = (e) => {
        e.preventDefault();
        const formData = new FormData();
        const fileField = document.getElementById('file-selector');

        formData.append('title', title);
        formData.append('info', info);
        formData.append('image', fileField.files[0]);
        formData.append('date', new Date());

        sendNew(formData);
        setTitle('');
        setInfo('');
    }

    return(
        <div className="widget nueva_entrada">
            <h3 className="titulo">Nueva Entrada</h3>
            <form action="">
                <input 
                    type="text" 
                    placeholder="Titulo"
                    value={title}
                    onChange={() => setTitle(titleRef.current.value)}
                    ref={titleRef}/>
                <textarea 
                    placeholder="Info"
                    value={info}
                    onChange={() => setInfo(infoRef.current.value)}
                    ref={infoRef}>
                </textarea>
                <input type="file" id='file-selector'/>
                <div className="d-flex justify-content-end">
                    <button onClick={news}><i className="icon icon-edit"></i>Enviar</button>
                </div>
            </form>
            {spinner ? <SpinnerWaith/> : ''}
            {alert ? <AlertSuccess/> : ''}
        </div>
    )
}