import { Button, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({

    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginBottom: theme.spacing(0)
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(16.6),
        marginTop: theme.spacing(55)
    }
}))
const Content = () => {
    const classes = useStyles()
    return (
        <>
        <Paper className={classes.mainFeaturesPost}
            style={{ backgroundImage: `url(https://i.pinimg.com/originals/98/0b/b7/980bb7f79201db76ec8dcfe8b5694ae6.jpg)` }}>
            <Container fixed>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        <Paper className={classes.mainFeaturesPost}
            style={{ backgroundImage: `url(https://i.pinimg.com/originals/80/1d/46/801d46f3282e33493824257ad0eb8266.jpg)`, backgroundPosition: 'top', }}>
            <Container fixed>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        <Paper className={classes.mainFeaturesPost}
            style={{ backgroundImage: `url(https://mocah.org/uploads/posts/308069-Badang-Leo-Zodiac-Skin-Mobile-Legends-4K.jpg)`, backgroundPosition: 'top', }}>
            <Container fixed>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        <Paper className={classes.mainFeaturesPost}
            style={{ backgroundImage: `url(https://www.teahub.io/photos/full/7-75813_moskov-twilight-dragon-skin-mobile-legends-4k-moskov.jpg)`, backgroundPosition: 'top', }}>
            <Container fixed>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        <Paper className={classes.mainFeaturesPost}
            style={{ backgroundImage: `url(https://wallpaperaccess.com/full/3824563.jpg)`, backgroundPosition: 'top', }}>
            <Container fixed>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        <Paper className={classes.mainFeaturesPost}
            style={{ backgroundImage: `url(https://1.bp.blogspot.com/-JWRD7-TYlP4/X2Yc336eIfI/AAAAAAAAB2A/quKcdCC_ftAuy76TGfGjatabVnnel3_AQCLcBGAsYHQ/s0/69c4c665b8cfe31e5dcdaf1fbfc55717.png)`, backgroundPosition: 'center', }}>
            <Container fixed>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        <Paper className={classes.mainFeaturesPost}
            style={{ backgroundImage: `url(https://1.bp.blogspot.com/-Gd3OyV7wCYw/X3WVrC5EirI/AAAAAAAACE8/AfTGBpFuxwYZckNwhe2t9gUeHm81LkNcgCLcBGAsYHQ/s0/0ed66c5c16e1bd1342d69e64e8671f5b.png)`, backgroundPosition: 'center', }}>
            <Container fixed>
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturesPostContent}>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
        </>
    );
};

export default Content;