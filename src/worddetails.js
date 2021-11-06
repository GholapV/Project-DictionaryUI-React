import React from 'react'

const WordDetail = ({ setDetailModel, word }) => {

    const { wordId, extracted } = word

    return (
        <>
            <div className="single-modal-wapper">
                <div className="single-modal-header">
                    <i className="fas fa-times" onClick={() => setDetailModel()}></i>
                </div>
                <div className="single-modal-inner">
                    <h1>{wordId}</h1>

                    {extracted.map((item) => {
                        return (
                            <div key={item._id}>
                                <h4 className="modal-inner-list">{item.type}</h4>
                                <h3>{item.definitions}</h3>
                                {item.examples.map((definition, i) =>
                                    <p key={i}>example: &nbsp;&nbsp; {definition}</p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default WordDetail