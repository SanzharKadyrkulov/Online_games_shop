import { Button, Container, Grid, TextField, Typography, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect } from 'react';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


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

const Registration = () => {
    const [newUser, setNewUser] = useState({})
    const classes = useStyles()
    const { registerUser, user, succes, loading, errorMessage, clearState } = useAuth()
    const history = useHistory()
    const handleChange = (e) => {
        let newObj = {
            ...newUser
        }
        newObj[e.target.name] = e.target.value
        setNewUser(newObj)
        console.log(newObj);
    }
    const signup = (e) => {
        e.preventDefault()
        try {
            registerUser(newUser)
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        if (succes) {
            history.push('/login')
        }

        return () => {
            clearState()
        }
    }, [succes])

    return (
        <div style={{
            padding: '60px', height: '100vh', backgroundImage: `url(https://images8.alphacoders.com/518/thumb-1920-518845.jpg)`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', width: '100%'
        }} >
            <Paper style={{ backgroundColor: 'rgba(52, 52, 52, 0)' }} className={classes.paper} elevation={3}>
                <h1 className={classes.title}>Registration</h1>
                <form noValidate autoComplete='off' className={classes.form} onSubmit={signup} action="">
                    <Grid container>
                        <div>
                            {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}

                        </div>
                        <Grid>
                            <TextField
                                onChange={(e) => handleChange(e)}
                                name='email'
                                variant='outlined'
                                required
                                label='Email Address'
                                fullWidth
                                InputLabelProps={{ className: classes.input__label }}
                                inputProps={{ className: classes.input }}
                                color='secondary'
                                className={classes.textfield}
                            />
                            <TextField
                                onChange={(e) => handleChange(e)}
                                type='password'
                                name='password'
                                variant='outlined'
                                required label='Password'
                                fullWidth
                                InputLabelProps={{ className: classes.input__label }}
                                inputProps={{ className: classes.input }}
                                color='secondary'
                                className={classes.textfield}
                            />
                            <TextField
                                variant='outlined'
                                type='password'
                                required label='Password again'
                                fullWidth
                                InputLabelProps={{ className: classes.input__label }}
                                inputProps={{ className: classes.input }}
                                color='secondary'
                                className={classes.textfield}
                            />
                            <Typography style={{ color: '#95cca5', margin: '10px auto 0', textAlign: "center" }}>
                                Already have account? <Link style={{ textDecoration: 'underline', color: "#53bb4c" }} to="/login">Sing in</Link>
                            </Typography>
                        </Grid>
                        <Button style={{ color: '#e9fdd2', margin: '15px auto 0', backgroundColor: "#8bc34a" }} variant='contained' color='primary' type='submit' disabled={loading}>
                            {loading ? <CircularProgress /> : 'Sign up'}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </div>
    );
};

export default Registration;