import React from  'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent.jsx'

ReactDOM.render(<ClassComponent  initialValue={10} label='Contador'/>, document.getElementById('app'))