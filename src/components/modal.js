import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import { useModal } from "react-hooks-use-modal";

export default function ModalExample({ information }) {
    const [Modal, open, close, isOpen] = useModal("root", {
        preventScroll: true,
        closeOnOverlayClick: false,
    });

    const modalStyle = {
        backgroundColor: "#fff",
        padding: "60px 100px",
        //borderRadius: "10px"
    };

    console.log(information);

    return (
        <div>
            <button onClick={open}>OPEN</button>
            <Modal>
                <div style={modalStyle}>
                    <h1>Title</h1>
                    <p>This is a customizable modal.</p>
                    <button onClick={close}>CLOSE</button>
                </div>
            </Modal>
        </div>
    );
}
