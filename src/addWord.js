import axios from 'axios';
import React, { useContext } from 'react'
import ContextAPI from './context';

function AddWord() {
    const [addword, setAddWord] = useContext(ContextAPI).addword
    const [inputvalue, setInputvalue] = useContext(ContextAPI).inputvalue
    const [message, setMessage] = useContext(ContextAPI).message

    const onClickhandler = () => {

        axios.get(`https://dictionary-server-04.herokuapp.com/api/v1/dictionary/${inputvalue}`)
            .then((res) => {
                const { msg } = res.data
                if (msg === undefined) setMessage('Added')
                else setMessage(msg)
            })
            .catch((err) => {
                setMessage('Error While Adding')
            })
    }

    return (
        <>
            {
                addword ?
                    <div className="model-wrapper">
                        <div className="model-inner">
                            <h3>Add To Dictionary</h3>
                            <label>
                                New Word
                            </label>
                            <input type="text" value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} />
                            {message === '' ?
                                <div style={{ textAlign: "center" }}>
                                    <button className="primary-btn"
                                        onClick={() => setAddWord(false)}>
                                        Cancel
                                    </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="primary-btn" onClick={onClickhandler}>
                                        Add
                                    </button>
                                </div> :
                                <div style={{ textAlign: 'center' }}>
                                    <button className="primary-btn"
                                        onClick={() => setAddWord(false)}>
                                        Cancel
                                    </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className='message-span'>{message}</span>
                                </div>}
                        </div>
                    </div>
                    :
                    <span className="addmodal" onClick={() => {
                        setAddWord(true)
                        setMessage('')
                        setInputvalue('')
                    }}>
                        +
                    </span>
            }

        </>
    )
}

export default AddWord
