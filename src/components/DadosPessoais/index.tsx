import React from 'react'
import CallIcon from '@mui/icons-material/Call'
import PersonIcon from '@mui/icons-material/Person'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import './index.css'

export default function DadosPessoais(): JSX.Element {
    return (
        <section>
            <div className='subtitle'>
                <PersonIcon sx={{ color: '#15689e' }}></PersonIcon>
                <p className='textEmphasis'>Dados Pessoais</p>
            </div>
            <ul>
                <li>Nome do Usuário: Manuela</li>
                <li>Nome da mãe: Joana Maria propier Santos</li>
                <li>Data de nascimento: 1984-06-22TT00:00:00.000Z</li>
                <li>Idade: 37 anos</li>
                <li>RG: 5.656-565</li>
                <li>Órgão emissor: SDS/PE</li>
                <li>CPF: 31126027650</li>
                <li>Nacionalidade: brasileira</li>
            </ul>
            <div className='subtitle'>
                <LocationOnIcon sx={{ color: '#15689e' }}></LocationOnIcon>
                <p className='textEmphasis'>Endereço</p>
            </div>
            <ul>
                <li>Rua Caracol, 700 - Candeias - Jaboatão dos Guararapes/PE</li>
                <li>CEP: 50370-999</li>
            </ul>
            <div className='subtitle'>
                <CallIcon sx={{ color: '#15689e' }}></CallIcon>
                <p className='textEmphasis'>Contato</p>
            </div>
            <ul>
                <li>Telefone: (81) 98664.9317</li>
                <li>Celular: (81) 98782.3755</li>
                <li>E-mail: manup@mail.com.br</li>
            </ul>
        </section>
    )
}
