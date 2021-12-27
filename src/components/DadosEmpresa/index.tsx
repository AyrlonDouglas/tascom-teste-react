import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import CallIcon from '@mui/icons-material/Call'
import ApartmentIcon from '@mui/icons-material/Apartment'
import './index.css'

export default function DadosEmpresa(): JSX.Element {
    return (
        <section>
            <div className='subtitle'>
                <PersonIcon sx={{ color: '#15689e' }}></PersonIcon>
                <p className='textEmphasis'>Dados do profissional</p>
            </div>
            <ul>
                <li>Nome do Usuário: manuprop@gmail.com.br</li>
                <li>Data de nascimento: 1984-06-22TT00:00:00.000Z</li>
                <li>Idade: 37 anos</li>
                <li>CPF: 31126027650</li>
            </ul>

            <div className='subtitle'>
                <CallIcon sx={{ color: '#15689e' }}></CallIcon>
                <p className='textEmphasis'>Contato</p>
            </div>
            <ul>
                <li>E-mail: manup@mail.com.br</li>
            </ul>
            <div className='subtitle'>
                <ApartmentIcon sx={{ color: '#15689e' }}></ApartmentIcon>
                <p className='textEmphasis'>Empresas</p>
            </div>
            <ul>
                <li>Rede Alfa Hospitas</li>
                <li>Real Hospital Português</li>
                <li>Hospital Getúlio Vargas</li>
            </ul>
        </section>
    )
}
