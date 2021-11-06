import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import Modal from './modal'
import ContextAPI from './context'

function WordsPanel() {

    const [data, setData] = useState([])
    const [word, setWord] = useState({})
    const [detailModel, setDetailModel] = useContext(ContextAPI).detailModel
    const input = useContext(ContextAPI).input[0]

    useEffect(() => {
        axios.get('https://dictionary-server-04.herokuapp.com/api/v1/favorites')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [data])

    const singleData = (i) => {
        const wordData = data[i]
        setWord(wordData)
    }

    const onClickhandler = (id) => {
        axios.delete(`https://dictionary-server-04.herokuapp.com/api/v1/favorites/${id}`)
    }

    return (
        <>
            <div className="searching-word">
                <h5>Word List</h5>
                <ul className="word-list">
                    {
                        data.filter(item => item['wordId'].includes(input)).map((item, i) => {
                            const { wordId, extracted, _id: id } = item
                            return <div key={id}>
                                <h4 onClick={() => {
                                    setDetailModel(true)
                                    singleData(i)
                                }}>
                                    {wordId}
                                </h4>
                                {extracted.map((element, i) => {
                                    return <p key={i}>{element.type}: {element.definitions}</p>
                                })}<br />
                                <button type='text' className="delete-word" onClick={() => onClickhandler(id)}>Delete</button>
                            </div>
                        })
                    }
                </ul>
            </div>
            <Modal word={word} detailModel={detailModel} setDetailModel={setDetailModel} />
        </>
    )
}

export default WordsPanel