import React from 'react'
import { Tabs, Tab, Paper, Typography, Box } from '@mui/material'
import DadosProfissionais from './DadosProfissionais'
import DadosEmpresa from './DadosEmpresa'
import DadosPessoais from './DadosPessoais'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    }
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Paper>
                    <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                        <Tab label='DADOS PESSOAIS' {...a11yProps(0)} />

                        <Tab label='DADOS PROFISSIONAIS' {...a11yProps(1)} />
                        <Tab label='DADOS DA EMPRESA' {...a11yProps(2)} />
                    </Tabs>
                </Paper>
            </Box>
            <TabPanel value={value} index={0}>
                <DadosPessoais />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DadosProfissionais />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DadosEmpresa />
            </TabPanel>
        </Box>
    )
}
