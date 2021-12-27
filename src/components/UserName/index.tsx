import React from 'react'
import { Avatar } from '@mui/material'
import './index.css'
import FemaleIcon from '@mui/icons-material/Female'

export default function UserName(): JSX.Element {
    return (
        <div className='name'>
            <span className='contentName'>
                <Avatar sx={{ bgcolor: '#15689e' }}></Avatar>
                <h3>Manuela Propier Santos</h3>
                <FemaleIcon sx={{ color: '#a0a0a0' }}></FemaleIcon>
            </span>
        </div>
    )
}
