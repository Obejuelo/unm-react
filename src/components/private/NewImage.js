import React, {useState, useEffect} from 'react';
import {url} from '../../util/config';
import FormImage from './FormImage';
import ListImages from './ListImages';
import EditImage from './EditImage';
import ModalConfirm from '../../shared/private/modalConfirm/ModalConfirm';

export default function() {
    const [images, setImages] = useState([]);
    const [image, setImage] = useState({});
    const [option, setOption] = useState('new-entry');
    const [idDelete, setIdDelete] = useState('');
    const [modal, setModal] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [alert, setAlert] = useState(false);

    useEffect(()=>{
        const getImages = () => {
            fetch(`${url}image`)
                .then(res=>res.json())
                .then(data => {
                    setImages(data.reverse())
                    // console.log(data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getImages();
    },[]);

    const getImage = (id) => {
        fetch(`${url}image/${id}`)
            .then(res=>res.json())
            .then(data => {
                setImage(data)
                setOption('edit-image')
            })
    }

    const createImage = (formData) => {
        setSpinner(true)
        let copyImg = [...images];
        fetch(`${url}image`, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(data => {
            copyImg.push(data);
            setImages(copyImg)
            setOption('new-entry');
            setSpinner(false)
            changeAlert();
        });
    }

    const editImage = (id, body) => {
        setSpinner(true)
        fetch(`${url}image/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data => {
            setOption('new-entry');
            setSpinner(false);
        });
    }

    const deleteImg = (id) => {
        fetch(`${url}image/${id}`, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data);
            let newImages = images.filter(img => {
                return img._id !== id;
            });
            setImages(newImages.reverse());
            setModal(false);
        })
    }

    const changeAlert = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    }


    const renderForm = () => {
        if(option === 'new-entry') {
            return <FormImage 
                        createImage={createImage}
                        spinner={spinner}
                        alert={alert}/>
        } else if(option === 'edit-image') {
            return <EditImage 
                        image={image}
                        editImage={editImage}
                        setOption={setOption}
                        spinner={spinner}/>
        }
    }

    return([
        <div className="main col" key={1}>
            <div className="row">
                <div className="columna col-lg-7">
                    {renderForm()}
                </div>
                <ListImages 
                    setOption={setOption}
                    images={images}
                    idDelete={setIdDelete}
                    getImage={getImage}
                    setModal={setModal}/>
            </div>
        </div>,
        modal
        ? <ModalConfirm 
            key={2} 
            idDelete={idDelete}
            deleteItem={deleteImg}
            setModal={setModal}/>
        : ''
    ])
}