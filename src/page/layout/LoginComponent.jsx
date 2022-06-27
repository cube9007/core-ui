import * as React from 'react';
import { Box, Stack, TextField, 
        IconButton,
        InputAdornment,
        FormControl, OutlinedInput,
        Checkbox,
        Button,
        Link,
        } from "@mui/material";

import { FirstPage, 
        VisibilityOff,
        Visibility,

        } from "@mui/icons-material";

function Login () {
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });

    const [Password, setPassword] = React.useState('');
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
      <>
        <Stack spacing='100px' className="Login">
            <div className='flex-grow justify-center'>
              <p className='h1-70 text-painted'> NEXTREE </p>
            </div>
            <Stack spacing='25px'>
              <Stack spacing='10px'>
                <p className='text-60p font-medium-b'>Email Address</p>
                <TextField
                placeholder="name@company.com"
                size='small'
                />
              </Stack>
              <Stack spacing='10px'>
                <div className='flex-grow justify-center'>
                  <p className='flex-grow text-60p font-medium-b'>Password</p>
                  <p className='primary-font font-small'> Forgot password?</p>
                </div>
                <OutlinedInput
                placeholder="Enter your password"
                size='small'
                type={values.showPassword ? 'text' : 'password'}
                value={Password}
                onChange={passwordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                />
              </Stack>
              <Stack spacing='10px'>
                <div className='flex align-center'>
                  <Checkbox />
                  <p className='text-60p font-medium-b'>Remember Information</p>
                </div>
                <Button fullwidth size='large' className='login-btn'> Login</Button>
              </Stack>
              <Stack direction='row' alignItems='center' spacing='10px'>
                <p className='text-60p font-medium-b'>Not a member?</p>
                <a href='/' className='primary-font font-small'> Sign up</a>
              </Stack>
            </Stack>
        </Stack>
      </>
    );
  };
  
  export default Login;