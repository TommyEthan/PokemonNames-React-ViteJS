import React from 'react';


export default function PokemonList({pokemon}){
    return (
        <>
            {pokemon.map((p,i)=>(
             <tr key={i}>
                <th>-</th>
                <td>{p}</td>
             </tr>
            ))}
        </>
    )
}