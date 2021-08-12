import React from 'react'
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from './context';

export default function Modal() {
    const { isModalOpen, closeModal } = GlobalContext();
    return (
        <div className={`${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}>
            <div className="modal-container">
                <h3>modal-content</h3>
                <button className="close-modal-btn" onClick={closeModal}><FaTimes /></button>
            </div>
        </div>
    )
}
