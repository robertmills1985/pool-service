import React from 'react' 

const AlkReadings = props => (
    <div>
        <div>
            <h1>Alk</h1>
            <button onClick={props.alkB80} >Below 80</button>
            <button onClick={props.alk80} >80</button>
            <button onClick={props.alk90} >90</button>
            <button onClick={props.alk100} >100</button>
            <button onClick={props.alk110} >110</button>
            <button onClick={props.alk120} >120</button>
            <button onClick={props.alkA120} >Above 120</button>
        </div>
    </div>
)

export default AlkReadings