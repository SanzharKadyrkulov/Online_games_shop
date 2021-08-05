import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect } from 'react';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Registration = () => {
    const [newUser, setNewUser] = useState({})
    const {registerUser, user, succes, loading, errorMessage, clearState} = useAuth()
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
        if(succes){
            history.push('/login')  
        }

        return () => {
            clearState()
        }
    }, [succes])

    return (
        <Container component='main' maxWidth='xs'>
            <form onSubmit={signup} action="">
                <Grid container>
                    <div>
                    <Typography component='h1' variant='h5'>
                        Registration
                    </Typography>
                    {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
                    
                    </div>
                    <Grid>
                    <TextField onChange={(e) => handleChange(e)} name='email' variant='outlined' required label='Email Address'/>
                    <TextField onChange={(e) => handleChange(e)} type='password' name='password' variant='outlined' required label='Password'/>
                    <TextField variant='outlined' type='password' required label='Password again'/>
                    </Grid>
                    <Button variant = 'contained' color='primary' type='submit' disabled={loading}>
                        {loading ? <CircularProgress /> : 'Sign up'}
                    </Button>
                </Grid>
            </form>
        </Container>
    );
};

export default Registration;