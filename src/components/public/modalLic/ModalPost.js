import React from 'react';
import Modal from 'react-responsive-modal';
import TextInfo from '../text/TextInfo';
import Iframe from '../iframe/Iframe';
import Req from '../Req';
import Plain from '../Plain/Plain';

const ModalPost = ({showModal, hideModalFunction, data, req}) => {
    return(
        <Modal 
            open={showModal} 
            onClose={()=>hideModalFunction(false)}
            blockScroll={false}>
          <div className="row">
            <div className="col-12 col-md-6">
                <Iframe
                    url='https://www.youtube.com/embed/HaPlqjaqY1E'
                    />
            </div>
            <div className="col-12 col-md-6">
                <TextInfo 
                    title='Objetivo'
                    info={data.objetivo}/>
            </div>
            <div className="col-12 col-md-6">
                <TextInfo 
                    title='Campo Laboral'
                    info={data.campo}/>
            </div>
            <div className="col-12 col-md-6">
                <Req 
                    title='Requisitos'
                    req={req}/>
            </div>
          </div>
          <div className="row justify-content-around my-2">
            <h3 className='text-center'>Plan de estudios</h3>
            <div className="w-100"></div>
            <Plain title='Primer Semestre' plain={data.plan.primero}/>
            <Plain title='Segundo Semestre' plain={data.plan.segundo}/>
            <Plain title='Tercer Semestre' plain={data.plan.tercero}/>
            <Plain title='Cuarto Semestre' plain={data.plan.cuarto}/>
          </div>
          <div className='text-center'>
              <button className="btn btn-sm btn-danger" onClick={()=>hideModalFunction(false)}>
                Cerrar
              </button>
          </div>
        </Modal>
    )
}

ModalPost.defaultProps = {
    data: {
        objetivo: [
            {p:'parrafo'}
        ],
        campo: [
            {p: 'Campo laboral'}
        ],
        plan: {
            primero:[{p:'materia'},{p:'materia'}],
            segundo:[{p:'materia'},{p:'materia'}],
            tercero:[{p:'materia'},{p:'materia'}],
            cuarto:[{p:'materia'},{p:'materia'}]
        }
    },
    req:[{p:'requisitos'}]
}

export default ModalPost;