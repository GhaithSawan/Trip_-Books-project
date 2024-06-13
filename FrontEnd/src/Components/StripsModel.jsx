import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StripsTable from './StripsTable';
import axios from 'axios';
import { URLaxios } from '../../constant';

const StripsModel = ({ show, setShow, Strips ,Destination ,Check_In,Check_Out}) => {
    
   
    const handleClose = () => setShow(false);
    return (
        <div className=' w-100'>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header  >
                    <Modal.Title>{Destination} Strips</Modal.Title>
                </Modal.Header>
                <Modal.Body className=' w-100 '>
                    <StripsTable Strips={Strips} Check_In={Check_In} Check_Out={Check_Out}/>
                </Modal.Body>
                <Modal.Footer className=' w-100 pt-0 mt-0 ' style={{borderTop:"none"}}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default StripsModel