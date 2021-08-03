import { AppBar, Button, Container, IconButton, Toolbar, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu'

import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useProducts } from "../../contexts/ProductContext";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1
    },
    mainFeaturesPost: {
      position: 'relative',
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundOverlay: 'rgba(0,0,0,.3)',
    },
    mainFeaturesPostContent: {
      position: 'relative',
      padding: theme.spacing(6),
      marginTop: theme.spacing(8)
    },
    cardMedia: {
      paddingTop: '56.25%'
    },
    cardContent: {
      flexGrow: 1
    },
    cardGrid: {
      marginTop: theme.spacing(4)
    }
  }))

const Header = () => {
    const classes = useStyles()
    const {history} = useProducts()
    const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
    return (
        <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography onClick={() => history.push("/")} variant="h4" className={classes.title}>
              War Dogs
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>log In</Button>
              <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                <DialogContent>
                  <DialogContentText>Не смотри заполняй , иначе пуля на лбу будет!!</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email address"
                    type="email"
                    fullwidth />
                  <TextField
                    // autoFocus
                    margin="dense"
                    id="namepass"
                    label="Password"
                    type="password"
                    fullwidth />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                  <Button onClick={handleClose} color="primary">Log In</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Header;