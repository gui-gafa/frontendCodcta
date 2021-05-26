import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from 'react-router-dom';
import axios from 'axios';

let obras1 = [
    {
       id: "0",
       endereco: "/Obras/0",
       titulo: "Novo H8",
       descricao: "Reforma do alojamento estudantil dos alunos do ITA.",
       cidade: "São José dos Campos-SP",
       cliente: "ITA",
       fonte: "MEC",
       foto: "/novo_h8.PNG",
    },
    {
        id: "1",
        endereco: "/Obras/1",
        titulo: "Subestação",
        descricao: "Reforma da subestação de energia do DCTA.",
        cidade: "São José dos Campos-SP",
        cliente: "GAP-SJ",
        fonte: "EMAER/INPE",
        foto: "/predio_icea.PNG",
    },
    {
        id: "2",
        endereco: "/Obras/2",
        titulo: "Rede de Água F2",
        descricao: "Reforma e acompanhamento da rede de água do DCTA.",
        cidade: "São José dos Campos-SP",
        cliente: "GAP-SJ",
        fonte: "EMAER",
        foto: "/rede_de_agua.PNG",
    }
  ];

  


const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  root: {
    maxWidth: 345,
    height: 400
  },
  media: {
    height: 220,
  },
  grid: {
    /*paddingLeft de 255 porque a largura da barra lateral é de 240*/
    paddingLeft: 0,
    paddingTop: 25,
  }
});







function GradeObras(props) {
  const { classes } = props;
  
  
    
  
  
      
  return (
    <div>
        <Paper className={classes.paper}>
        <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
            <Toolbar>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                <SearchIcon className={classes.block} color="inherit" />
                </Grid>
                <Grid item xs>
                <TextField
                    fullWidth
                    placeholder="Procurar pelo nome, id ou responsável"
                    InputProps={{
                    disableUnderline: true,
                    className: classes.searchInput,
                    }}
                />
                </Grid>
                <Grid item>
                <Button variant="contained" color="primary" className={classes.addUser}>
                    Buscar
                </Button>
                <Tooltip title="Reload">
                    <IconButton>
                    <RefreshIcon className={classes.block} color="inherit" />
                    </IconButton>
                </Tooltip>
                </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
        
        {/*<div className={classes.contentWrapper}>
            <Typography color="textSecondary" align="center">
            No users for this project yet
            </Typography>
                </div>*/}
        </Paper>
        
        <Grid container spacing='3' className={classes.grid}>
        {
            obras1.map((item, index) => (
            <Grid item>
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={item.foto}
                        title={item.titulo}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.titulo}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.descricao}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions > 
                        <Button size="small" color="primary">
                            <Link to={item.endereco} style={{color: '#5d8aa8', textDecoration: 'none'}}>
                            detalhes
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            ))
        } 
        </Grid>
        
        
        <Grid container spacing='3' className={classes.grid}>
        {/* {
            dados.map((item, index) => (
            <Grid item>
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        title={item.object_name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.object_name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.object_name}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions > 
                        <Button size="small" color="primary">
                            detalhes   
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            ))
        } */}
        </Grid>
    </div>
  );
}

GradeObras.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GradeObras);