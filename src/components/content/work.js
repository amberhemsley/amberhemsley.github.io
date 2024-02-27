import '../../App.css';
import React , { useState, useEffect }from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";


const Work = () => {
   return (
        <Box sx={{width:'inherit'}}>
            <Typography variant="h5" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>Software Engineer @ DOJO</Typography>
            <Typography variant="h6">September 2021 - Present</Typography>
            <Typography variant="body1">
                <List sx={{p:'10px', paddingRight:'60px'}}>
                    <ListItem sx={{paddingY:'2px', overflow:'wrap', maxWidth:'inherit'}}>- Contributed to the maintenance and creation of Dojo’s public APIs in Golang connecting terminals to points of sale through both websockets and REST</ListItem>
                    <ListItem sx={{paddingY:'2px'}}>- Gained experience working with redis, mongo and kubernetes</ListItem>
                    <ListItem sx={{paddingY:'2px'}}>- Paired on the development of a new web application for the company’s internal use</ListItem>
                    <ListItem sx={{paddingY:'2px'}}>- Independently coded and deployed a back end integration to DOJO's Tables API using Golang and Kubernetes</ListItem>
                </List>
             </Typography>
        </Box>
    );
};

export default Work;

