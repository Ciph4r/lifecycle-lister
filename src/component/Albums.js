import React from 'react'


const Albums = (props) => {

    console.log(props)
    return (
        <div>
           {props.data.map((album , idx) => {
                return (
                    <div key ={album.id}>
                        <h1> Title: {album.title}</h1>
                        <h1><a href= './'>Url: https://jsonplaceholder.typicode.com/albums/{album.id}</a> </h1>
                        <img alt = '...' src = {album.url} /> 
                    </div>
           )
            })}
        </div>
    )

}


export default Albums