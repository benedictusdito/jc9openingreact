import React from 'react'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component { // WAJIB RETURN SATU BUAH DIV
    render(){
        return (
            <div>
                <SearchBar/>
                <ImageList/>
            </div>
        )
    }
}


export default App