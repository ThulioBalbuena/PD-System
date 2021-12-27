import { Box } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { ExitToApp, Person } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import logo from './logo.png';
import './Navbar.css';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
}}));

const fonte = {
  fontFamily: 'Quicksand'
};
export function Navbar() {
    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 10 }}>
      <AppBar position="static" style={{ background: '#28347c'}} >
        <Toolbar className={classes.toolbar}>
        <img src={logo} alt="Alguma coisa"/>
          <Typography style={fonte} variant="h5" component="div" >
            PD System
          </Typography>
          <Box>
          <Typography style={fonte} color="inherit" ><Person /> Olá, Usuárioㅤㅤ<ExitToApp />Sair</Typography>
            </Box>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color='white'>
          <Toolbar>
        <Typography style={fonte} variant="h5" component="div" >
      ㅤㅤㅤㅤㅤㅤㅤSquads 
        </Typography>
        </Toolbar>
        </AppBar>
    </Box>
  );
}

