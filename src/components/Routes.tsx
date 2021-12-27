import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import DadosProfissionais from './DadosProfissionais'
import DadosEmpresa from './DadosEmpresa'
import DadosPessoais from './DadosPessoais'

const Routes = function () {
    return (
        <BrowserRouter>
            <Route component={DadosPessoais} path='/' exact />
            <Route component={DadosProfissionais} path='/profissionais' />
            <Route component={DadosEmpresa} path='/empresa' />
        </BrowserRouter>
    )
}
