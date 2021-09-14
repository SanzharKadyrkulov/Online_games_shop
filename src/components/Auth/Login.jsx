import { Button, Container, Grid, TextField, Typography, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        margin: '0px auto',
        maxWidth: 400
    },
    title: {
        textAlign: "center",
        color: "#8bc34a"
    },
    input: {
        color: "#e0f5cf",
        borderRightColor: '#FFF'
    },
    input__label: {
        color: "#95cca5",
        borderRightColor: '#FFF'
    },
    textfield: {
        marginTop: 10,
        color: 'green !important',
        border: '1px solid grey',
        borderRadius: theme.shape.borderRadius
        // color:'secondary'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
}))


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Login = () => {
    const [newUser, setNewUser] = useState({})
    const { loginUser, user, clearState, errorMessage, loading } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const classes = useStyles()
    const { from } = location.state || { from: { pathname: '/' } }
    const handleChange = (e) => {
        let newObj = {
            ...newUser
        }
        newObj[e.target.name] = e.target.value
        setNewUser(newObj)
        console.log(newObj);
    }

    const signin = (e) => {
        e.preventDefault()
        try {
            loginUser(newUser)
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        if (user) {
            history.push('/')
        }

        return () => {
            clearState()
        }

    }, [user])

    useEffect(() => {
        if (user) {
            history.replace(from)
        }

        return () => {
            clearState()
        }

    }, [user])

    return (
        <div style={{
            padding: '60px', height: '100vh', backgroundImage: `url(https://a-static.besthdwallpaper.com/mortal-kombat-x-princess-kitana-oboi-19525_L.jpg)`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', width: '100%'
        }} >
            <Paper style={{ backgroundColor: 'rgba(52, 52, 52, 0)' }} className={classes.paper} elevation={3}>
                <h1 className={classes.title}>Login</h1>
                <form noValidate autoComplete='off' className={classes.form} onSubmit={signin} action="">
                    <Grid container>
                        <div>
                            {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
                        </div>
                        <Grid>
                            <TextField
                                fullWidth
                                onChange={(e) => handleChange(e)}
                                name='email'
                                variant='outlined'
                                required label='Email Address'
                                InputLabelProps={{ className: classes.input__label }}
                                inputProps={{ className: classes.input }}
                                color='secondary'
                                className={classes.textfield}
                            />
                            <TextField
                                fullWidth
                                onChange={(e) => handleChange(e)}
                                type='password'
                                name='password'
                                variant='outlined'
                                required label='Password'
                                InputLabelProps={{ className: classes.input__label }}
                                inputProps={{ className: classes.input }}
                                color='secondary'
                                className={classes.textfield} />
                            <Typography style={{ color: '#95cca5', margin: '10px auto 0', textAlign: "center" }}>
                                Don't have an account yet? <Link style={{ textDecoration: 'underline', color: "#53bb4c" }} to="/registration">Sing up</Link>
                            </Typography>
                        </Grid>
                        <Button style={{ color: '#e9fdd2', margin: '15px auto 0', backgroundColor: "#8bc34a" }} variant='contained' color='primary' type='submit' disabled={loading}>
                            {loading ? <CircularProgress /> : 'Log in'}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
};

export default Login;