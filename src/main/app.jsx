import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Rodape from '../common/template/rodape'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <h1>Conteudo</h1>
        </div>
        <Rodape />
    </div>
)