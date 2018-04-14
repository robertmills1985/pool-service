import React from 'react'

const ChlReading = props =>(
    <div>
        <div>
        <h1>Chl</h1>
        <button onClick={props.b1}>Below 1</button>
        <button onClick={props.chl1}>1</button>
        <button onClick={props.chl2}>2</button>
        <button onClick={props.chl3}>3</button>
        <button onClick={props.chl4}>4</button>
        <button onClick={props.chl5}>5</button>
        <button onClick={props.a5}>Above 5</button>
        <button onClick={props.a10}>Above 10</button>
        <button onClick={props.a20}>Above 20</button>
        </div>
    </div>
)

export default ChlReading