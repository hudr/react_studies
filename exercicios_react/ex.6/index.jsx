






import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Ramos'>
        <Member name='Hudson' />
        <Member name='Elizabeth' />
        <Member name='Braio' />
    </Family>,
    document.getElementById('app'))

