import React from 'react'
import WordDetail from './worddetails';

function Modal({ word, detailModel, setDetailModel }) {

    return (
        <>
            {detailModel ? <WordDetail setDetailModel={setDetailModel} word={word} /> : ""}
        </>
    )
}

export default Modal;