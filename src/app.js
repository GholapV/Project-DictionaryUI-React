import React, { useState } from 'react'

import SearchBar from './searchbar'
import WordsPanel from './wordspanel'
import AddWord from './addWord'

import ContextAPI from './context'

function App() {

    const value = {
        detailModel: useState(false),
        addword: useState(false),
        input: useState(''),
        inputvalue: useState(''),
        search: useState(false),
        message: useState('')
    }

    return (
        <ContextAPI.Provider value={value}>
            <SearchBar />
            <WordsPanel />
            <AddWord />
        </ContextAPI.Provider >
    )
}

export default App;