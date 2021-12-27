import React from 'react'
import { Tabs, Tab, Paper, Box, Button } from '@mui/material'
import DadosProfissionais from './DadosProfissionais'
import DadosEmpresa from './DadosEmpresa'
import DadosPessoais from './DadosPessoais'
import UserName from './UserName'
import './Page.css'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps): JSX.Element {
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
        </div>
    )
}

function a11yProps(index: number): { id: string; 'aria-controls': string } {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    }
}

export default function BasicTabs(): JSX.Element {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div className='fullPage'>
            <h1>Detalhamento Profissional</h1>
            <Box sx={{ width: '100%', backgroundColor: 'white' }}>
                <Box sx={{ borderColor: 'divider' }}>
                    <Paper sx={{ backgroundColor: '#f2f2f2' }}>
                        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                            <Tab sx={{ padding: 3 }} label='DADOS PESSOAIS' {...a11yProps(0)} />
                            <Tab
                                sx={{ padding: 3 }}
                                label='DADOS PROFISSIONAIS'
                                {...a11yProps(1)}
                            />
                            <Tab sx={{ padding: 3 }} label='DADOS DA EMPRESA' {...a11yProps(2)} />
                        </Tabs>
                    </Paper>
                </Box>
                <Box>
                    <UserName></UserName>
                    <TabPanel value={value} index={0}>
                        <DadosPessoais></DadosPessoais>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <DadosProfissionais></DadosProfissionais>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <DadosEmpresa></DadosEmpresa>
                    </TabPanel>
                </Box>
            </Box>
            <Button variant='contained' sx={{ marginTop: 2, backgroundColor: '#15689e' }}>
                Voltar
            </Button>
        </div>
    )
}
