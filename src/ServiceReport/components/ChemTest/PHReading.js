import React from 'react'

const PHReadings = props => (
    <div>
        <div>
            <h1>pH</h1>
            <button onClick={props.pHB72}>Below 7.2</button>
            <button onClick={props.pH72}>7.2</button>
            <button onClick={props.pH74}>7.4</button>
            <button onClick={props.pH76}>7.6</button>
            <button onClick={props.pH78}>7.8</button>
            <button onClick={props.pHA72}>Above 7.8</button>
        </div>
    </div>
)

export default PHReadings