import React from  'react'
import ReactDOM from 'react-dom'
import {Primeiro, Segundo} from './component.jsx'

ReactDOM.render(
        <div>
            <Primeiro value='primeiro'/>
            <Segundo value='segundo'/>
        </div>
        ,document.getElementById('app'))