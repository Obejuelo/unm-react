import React, {useState} from 'react';
import SpinnerWaith from '../../shared/private/SpinnerWaith';

export default function({image, editImage, setOption, spinner}) {
    const titleRef = new React.createRef()
    const [title, setTitle] = useState(image.description)

    const sendImage = (e) => {
        e.preventDefault()
        let body = {description: title}
        editImage(image._id, body)
    }

    const changeOption = (e) => {
        e.preventDefault();
        setOption('new-entry');
    }

    return(
        <div className="widget nueva_entrada">
            <h3 className="titulo">Editar</h3>
            <form onSubmit={sendImage}>
                <textarea 
                    value={title}
                    onChange={()=>setTitle(titleRef.current.value)}
                    ref={titleRef}
                    required
                    placeholder="Description of image">
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