import React, { useContext } from 'react'
import ContextAPI from './context'

function SearchBar() {
    const [search, setSearch] = useContext(ContextAPI).search
    const setInput = useContext(ContextAPI).input[1]

    return (
        <>
            {
                search ?
                    <div className="search-bar">
                        <div className="search-text">
                            <input type="text" placeholder='Search...'
                                onChange={(e) => setInput(e.target.value)} />
                        </div>
                        <div className="search-icon">
                            <h4 onClick={() => setSearch(false)}>
                                <i className="fas fa-times"></i>
                            </h4>
                        </div>
                    </div>
                    :
                    <div className="search-bar">
                        <div className="search-text">
                            <h3>Vocab</h3>
                        </div>
                        <div className="search-icon">
                            <h4 onClick={() => setSearch(true)}>
                                <i className="fas fa-search"></i>
                            </h4>
                        </div>
                    </div>
            }
        </>
    )
}

export default SearchBar;
