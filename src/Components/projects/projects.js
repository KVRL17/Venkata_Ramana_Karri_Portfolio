import './App1.css';
import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton } from '@mui/material';
import { Link as RouterLink, BrowserRouter as Router } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import weather from './Images/image.jpeg';
import logo from './Images/logo.jpg';
import resume from './Images/resume.jpeg';
import heros from './Images/main.jpeg';
import games from './Images/mainimage.jpeg';
import fight from './Images/img.jpeg';

function Projects() {
  return (
    <div className="App">
      <div className='tasks'>
        <div className='comp1'>
          <Box className="box">
            <Typography
              sx={{ textDecoration: "none", color: "Orangered", marginBottom: "10px" }}
              component={RouterLink}
              to="https://attendenceapp-nine.vercel.app/"
              variant="h6"
            >
              <img src={logo} style={{ height: '125px', width: '125px' }} alt='Attendence App' /><br />
              Attendence
            </Typography>
            <Typography className="box-function">App</Typography>
            <IconButton 
              sx={{ marginTop: '10px', color: 'grey' }} 
              component={RouterLink} 
              to="https://github.com/your-github-repo-link"
            >
              <GitHubIcon />
              <Typography variant="button">View Code</Typography>
            </IconButton>
          </Box>
          <Box className="box">
            <Typography
              sx={{ textDecoration: "none", color: "Orangered", marginBottom: "10px" }}
              component={RouterLink}
              to="https://th.bing.com/th?id=OIP.jXUExLhQfsKT_MWBuQzkQQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              variant="h6"
            >
              <img src="https://wallpaperaccess.com/full/6075689.png" style={{ height: '100px', width: '145px' }} alt='Netflix Clone' /><br />
              Netflix
            </Typography>
            <Typography className="box-function">Clone</Typography>
            <IconButton 
              sx={{ marginTop: '10px', color: 'grey' }} 
              component={RouterLink} 
              to="https://github.com/your-github-repo-link"
            >
              <GitHubIcon />
              <Typography variant="button">View Code</Typography>
            </IconButton>
          </Box>
          <Box className="box">
            <Typography
              sx={{ textDecoration: "none", color: "Orangered", marginBottom: "10px" }}
              component={RouterLink}
              to="https://venkata-ramana-karri-portfolio.vercel.app/"
              variant="h6"
            >
              <img src={resume} style={{ height: '125px', width: '125px' }} alt='Portfolio' /><br />
              Portfolio
            </Typography>
            <Typography className="box-function">Web page</Typography>
            <IconButton 
              sx={{ marginTop: '10px', color: 'grey' }} 
              component={RouterLink} 
              to="https://github.com/your-github-repo-link"
            >
              <GitHubIcon />
              <Typography variant="button">View Code</Typography>
            </IconButton>
          </Box>
        </div>
        <br />
        <div className='comp2'>
          <Box className="box">
            <Typography
              sx={{ textDecoration: "none", color: "Orangered", marginBottom: "10px" }}
              component={RouterLink}
              to="https://fighting-game-flax.vercel.app/"
              variant="h6"
            >
              <img src={fight} style={{ height: '125px', width: '125px' }} alt='Fighting Game' /><br />
              Fighting
            </Typography>
            <Typography className="box-function">Game</Typography>
            <IconButton 
              sx={{ marginTop: '10px', color: 'grey' }} 
              component={RouterLink} 
              to="https://github.com/your-github-repo-link"
            >
              <GitHubIcon />
              <Typography variant="button">View Code</Typography>
            </IconButton>
          </Box>
          <Box className="box">
            <Typography
              sx={{ textDecoration: "none", color: "Orangered", marginBottom: "10px" }}
              component={RouterLink}
              to="https://wheather-app-coral.vercel.app/"
              variant="h6"
            >
              <img src={weather} style={{ height: '125px', width: '125px' }} alt='Weather App' /><br />
              Weather
            </Typography>
            <Typography className="box-function">App</Typography>
            <IconButton 
              sx={{ marginTop: '10px', color: 'grey' }} 
              component={RouterLink} 
              to="https://github.com/your-github-repo-link"
            >
              <GitHubIcon />
              <Typography variant="button">View Code</Typography>
            </IconButton>
          </Box>
          <Box className="box">
            <Typography
              sx={{ textDecoration: "none", color: "Orangered", marginBottom: "10px" }}
              component={RouterLink}
              to="https://superhero-app-three.vercel.app/"
              variant="h6"
            >
              <img src={heros} style={{ height: '125px', width: '125px' }} alt='Super Hero App' /><br />
              Super Hero
            </Typography>
            <Typography className="box-function">App</Typography>
            <IconButton 
              sx={{ marginTop: '10px', color: 'grey' }} 
              component={RouterLink} 
              to="https://github.com/your-github-repo-link"
            >
              <GitHubIcon />
              <Typography variant="button">View Code</Typography>
            </IconButton>
          </Box>
          <Box className="box">
            <Typography
              sx={{ textDecoration: "none", color: "Orangered", marginBottom: "10px" }}
              component={RouterLink}
              to="https://react-counter-app-jeua.vercel.app/"
              variant="h6"
            >
              <img src={games} style={{ height: '125px', width: '125px' }} alt='Rock Paper Scissor Game' /><br />
              Rock Paper Scissor
            </Typography>
            <Typography className="box-function">Game</Typography>
            <IconButton 
              sx={{ marginTop: '10px', color: 'grey' }} 
              component={RouterLink} 
              to="https://github.com/your-github-repo-link"
            >
              <GitHubIcon />
              <Typography variant="button">View Code</Typography>
            </IconButton>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Projects;