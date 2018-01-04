import React from  'react'
import ReactDOM from 'react-dom'
import Family from './family.jsx'
import Member from './member.jsx'

ReactDOM.render(
        <div>
            <h1>Fámilia Martins</h1>
            <Family lastname='Martins'>
                <Member name='Raul'></Member>
                <Member name='Bruna'></Member>
                <Member name='Irene'></Member>
                <Member name='Luena'></Member>
            </Family>
        </div>
        ,document.getElementById('app')
    )