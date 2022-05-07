import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categorias = ['One Punch','Samurai X','Dragon Ball'];
    const [categorias, setCategorias] = useState(['One Punch']);

    //const handleAdd = () => {
      //  setCategorias( [ ...categorias, 'HunterXhunter' ] )
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr />
            
            {
                categorias.map(cat => (
                    <GifGrid 
                        category={ cat }
                        key = { cat }
                        /> 
            ))
            }
        </>
    )
}

export default GifExpertApp;