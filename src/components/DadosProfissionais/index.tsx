import React from 'react'
import CallIcon from '@mui/icons-material/Call'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import StarIcon from '@mui/icons-material/Star'
import './index.css'
import Fade from '@mui/material/Fade'

interface Props {
    fade?: boolean
}

export default function DadosProfissionais(props: Props): JSX.Element {
    return (
        <Fade in={props.fade} timeout={1000}>
            <section>
                <div className='subtitle'>
                    <CallIcon sx={{ color: '#15689e' }}></CallIcon>
                    <p className='textEmphasis'>Dados para contato</p>
                </div>
                <ul>
                    <li>Nome de usuário: manuprop@mail.com.br</li>
                    <li>Data de nascimento: 1984-06-22TT00:00:00.000Z</li>
                    <li>Idade: 37 anos</li>
                    <li>RG: 5.656-565</li>
                    <li>Órgão emissor: SDS/PE</li>
                    <li>CPF: 31126027650</li>
                    <li>Nacionalidade: brasileira</li>
                </ul>
                <div className='subtitle'>
                    <AccountBoxIcon sx={{ color: '#15689e' }}></AccountBoxIcon>
                    <p className='textEmphasis'>Função</p>
                </div>
                <ul>
                    <li>Função: Analista de sistema</li>
                    <li>Conselho: Conselho Regional de Enfermagem</li>
                    <li>UF: PE</li>
                    <li>Número: 000000000000</li>
                </ul>
                <div className='subtitle'>
                    <StarIcon sx={{ color: '#15689e' }}></StarIcon>
                    <p className='textEmphasis'>Especialidade</p>
                </div>
                <ul>
                    <li>Principal: infectologia</li>
                    <li>Outras: Alergia e imunologia</li>
                </ul>
            </section>
        </Fade>
    )
}
