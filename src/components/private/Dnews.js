import React, {useState, useEffect} from 'react';
import './dashboard.css';
import {url} from '../../util/config';
import NewsEntry from './NewsEntry';
import Entry from './Entry';
import EditNew from './EditNew';
import ModalConfirm from '../../shared/private/modalConfirm/ModalConfirm';

export default function() {
    const [news, setNews] = useState([]);
    const [option, setOption] = useState('new-entry');
    const [notice, setNotice] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [alert, setAlert] = useState(false);
    const [ modal, setModal] = useState(false);
    const [ idDelete, setIdDelete] = useState('');

    useEffect(()=>{
        const getNews = () => {
            fetch(`${url}news`)
                .then(res=>res.json())
                .then(data=>{
                    setNews(data);
                }).catch(err=>{
                    console.log(err);
                });
        }
        getNews();

        return () => {
            window.removeEventListener('resize', getNews);
        }
    },[option, modal]);

    const sendNews = (formData) => {
        setSpinner(true); // Show spinner
        let notices = [...news];
        
        fetch(`${url}news`, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(data => {
            notices.push(data);
            setNews(notices)
            setOption('new-entry');
            setSpinner(false); // Hide spinner
            changeAlert(); // show hide alert
            // console.log(data);
        });
    }

    const editNotice = (id, body) => {
        setSpinner(true);
        fetch(`${url}news/${id}`, {
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
            // console.log(data);
        });
    }

    const getNotice = (id) => {
        fetch(`${url}news/${id}`)
            .then(res=>res.json())
            .then(data => {
                // console.log(data);
                setNotice(data);
                setOption('edit-entry');
            })
    }

    const deleteNews = (id) => {
        fetch(`${url}news/${id}`, {
            method: 'DELETE',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            let newNotice = news.filter(notice => {
                return notice._id !== id;
            });
            setNews(newNotice.reverse());
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
        if(option === 'new-entry'){
            return <Entry 
                        sendNew={sendNews}
                        spinner={spinner}
                        alert={alert}/>
        } else if(option === 'edit-entry'){
            return <EditNew 
                        editNotice={editNotice} 
                        notice={notice}
                        setOption={setOption}
                        spinner={spinner}/>
        }
    }


    return([
        <div className='main col' key={1}>
            <div className="row">
                <div className="columna col-lg-7">
                    {renderForm()}
                </div>
                <NewsEntry 
                    news={news.reverse()}
                    newDelete={deleteNews}
                    getNotice={getNotice}
                    modal={setModal}
                    idDelete={setIdDelete}/>
            </div>
        </div>,
        modal 
            ? <ModalConfirm 
                key={2}
                setModal={setModal}
                deleteItem={deleteNews}
                idDelete={idDelete}/> 
            : ''
    ])
}