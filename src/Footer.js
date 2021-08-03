import React from 'react'
import "./Footer.css"
import { Container, Typography } from '@material-ui/core';

const Footer = () => {

    return (
        <Container className="root">

            <div className="body">
                <Typography className="header">Institute</Typography>
                <Typography variant="subtitle2" className='descrip'>East Delta University</Typography>
            </div>

            <div className="body"> 
                <Typography className="header">Developers</Typography>
                <Typography variant="subtitle2"  className='descrip'>
                    Jafran Bin Zakaria(Leader)
                    <br/>
                    Tusrehul Din Alvi
                    <br/>
                    Fahmida Rahman
                    <br/>
                    Sadia Sultana
                    <br/>
                    Humaira Tunjum Jaya
                    <br/>
                    Tasreain Jahan
                    <br/>
                </Typography>
            </div>

            <div className="body">
                <Typography className="header">Project Resoure</Typography>
                <Typography variant='subtitle2'  className='descrip'>
                    API : disease.sh
                    <br/>
                    ReactJs
                    <br/>
                    Material-UI(Core , Icone)
                    <br/>
                    ChartJs
                    <br/>
                    Leaflet(OpenStreetMap)
                </Typography>
            </div>

            <div className="body">
                <Typography  className="header">Instructor</Typography>
                <Typography variant='subtitle2'  className='descrip'>
                    Saraf Anika
                    <br/>
                    Contact : saraf.a@eastdelta.edu.bd
                </Typography>
            </div>

            <div className="body">
                <Typography className="header">For Bug Issues</Typography>
                <Typography variant='subtitle2' className='descrip'>
                    Contact : Jafran Bin Zakaria
                    <br/>
                    181007612@eastdelta.edu.bd Or
                    <br/>
                    jafranbinzakaria@gmail.com
                </Typography>
            </div>

        </Container>
    )
}

export default Footer
