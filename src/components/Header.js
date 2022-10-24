import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import DigiClock from './DigiClock';
import Greetings from './Greetings';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const NavList = styled.a`
    text-decoration : none;

`;

const StyledLink = styled(Link)`
    color:white;
    text-decoration: none;
    margin: 1rem;
    position: relative;
    &:hover, &:focus {
        color:yellow;
    }
    &:active{
        color: red;
    }

`;



function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          
        
            



       
          <Typography align="left" variant="h5" component="div" sx={{ flexGrow: 1 }}>
            CompanyABC 
            <box sx={{display: {xs: 'none', sm: 'block'}}}>
                {/* <Link to='/'><Button key={1} sx={{ color: '#fff'}}> Home </Button></Link>
                <Link to='/aboutus'><Button key={2} sx={{ color: '#fff'}}> About Us </Button></Link>
                <Link to='/activity'><Button key={3} sx={{ color: '#fff'}}>Activity</Button></Link> */}

                <NavList>
                <StyledLink to='/'> Home </StyledLink>
                <StyledLink to='/aboutus'> About Us </StyledLink>
                <StyledLink to='/activity'> Activity </StyledLink>
                <StyledLink to='/portfolio'> Portfolio </StyledLink>
                <StyledLink to='/hooks'> Hooks </StyledLink>
                <StyledLink to='/contactus'> ContactUs </StyledLink>
                <StyledLink to='/exercise'> Exercise </StyledLink>
                </NavList>
            
            </box>
           
          </Typography>
          <Typography   variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Greetings/>
          </Typography>
          <DigiClock/>
         
          
           
        
          
          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header