import { BottomNavigationAction, Button, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from "@material-ui/core";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu'
import LayerIcon from '@material-ui/icons/Layers'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FolderIcon from '@material-ui/icons/Folder'
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { BottomNavigation } from "@material-ui/core";

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
const cards = [1, 2, 3, 4, 5, 6]

function App() {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
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
                    autoFocus
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
      <main>
        <Paper className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://kubnews.ru/upload/iblock/0e8/0e8a8877ea6184f696c8b805cc38930f.jpg)` }}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Хочешь что нибудь  приобрести?
                  </Typography>
                  <Typography component="h5" color="inherit" paragraph>
                    АК 47 Описание
                    Калашниковым и принято на вооружение Советской Армии в 1949 году. Автоматика АК-47 работает по принципу отвода пороховых газов через отверстие в стенке ствола. Запирание ствола осуществляется поворотом затвора. ... Автомат Калашникова отличается высоким качеством изготовления, прост в обращении и при разборке.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn More
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth='sm'>
            <Typography variant='h2' align='center' colot='textPrimary' gutterBottom>Наши товары!</Typography>
            <Typography variant='h5' align='center' colot='textSecondary' paragraph>Наши товары предназначены только для охоты  Покупая наш товар не стоить думать о плохом !!!</Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={4} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">Open Catalog</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Learn Catalog</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGS2r8QAF2edWG9F55mThLxYF9jmNPRDyZ3R_EuFTNFhgrtWp9v7OmgwQHaRNQMB4kyE&usqp=CAU"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Block Pistol
                    </Typography>
                    <Typography >
                      Пушка заряженная не стреляет , Представляет , но не стреляет!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Наши данные
        </Typography>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography align="center" color="textSecondary" component="p" variant="subtitle1 ">
          Как же я долго мучался с этим Футером
        </Typography>
      </footer>
    </>
  );
}

export default App;
