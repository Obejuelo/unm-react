import React, {useState} from 'react';
import SpinnerWaith from '../../shared/private/SpinnerWaith';
import AlertSuccess from '../../shared/private/AlertSuccess';

export default function({createImage, spinner, alert}) {
    const titleRef = React.createRef();
    const [title, setTitle] = useState('');

    const sendImage = (e) => {
        e.preventDefault()
        const formData = new FormData();
        const fileField = document.getElementById('file-selector');

        formData.append('description', title);
        formData.append('image', fileField.files[0]);

        createImage(formData);
        setTitle('');
    }

    return(
        <div className="widget nueva_entrada">
            <h3 className="titulo">Nueva Imagen</h3>
            <form action="">
                <textarea 
                    value={title}
                    onChange={()=>setTitle(titleRef.current.value)}
                    ref={titleRef}
                    placeholder="Description of image">
                </textarea>
                <input type="file" id='file-selector'/>
                <div className="d-flex justify-content-end">
                    <button onClick={sendImage}><i className="icon icon-edit"></i>Enviar</button>
                </div>
            </form>
            {spinner ? <SpinnerWaith/> : ''}
            {alert ? <AlertSuccess/> : ''}
        </div>
    )
}