import React from  'react'
import ReactDOM from 'react-dom'
import Family from './family.jsx'
import Member from './member.jsx'

ReactDOM.render(
        <div>
            <Family lastname='Martins'>
                <Member name='Raul'></Member>

            </Family>
        </div>
        ,document.getElementById('app')
    )