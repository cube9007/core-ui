import * as React from 'react';
import LoginComponent from '../layout/LoginComponent';
import { motion,
  useAnimationFrame,
   } from 'framer-motion'
import { Box, Stack, TextField, 
    
} from "@mui/material";

import { FirstPage, 

        } from "@mui/icons-material";

function LoginPage () {
    

    return (
      <>
        <div>
            <div className='login-circle'>
                <Box width='400px' >
                    <LoginComponent />
                </Box>
            </div>
            <motion.div 
              className='primary-circle circle1' 
              animate={{
                scale: [1, 1.1, 1],
                y: [0, -100, 0],
                x: [0, -200, 0],
              }}
              transition={{
                duration: 24,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
            <motion.div 
              className='primary-circle circle2' 
              animate={{
                scale: [1, 1.3, 1],
                y: [-100, 0, -100],
                x: [-200, 0, -200],
              }}
              transition={{
                duration: 28,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
            <motion.div 
              className='primary-circle circle3' 
              animate={{
                scale: [1, 1.15, 1],
                y: [0, -50, 0],
                x: [0, +50, 0],
              }}
              transition={{
                duration: 18,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
            <motion.div 
              className='primary-circle circle4' 
              animate={{
                scale: [1, 1.15, 1],
                y: [0, -50, 0],
                x: [0, +50, 0],
              }}
              transition={{
                duration: 18,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
            <motion.div 
              className='primary-circle circle5' 
              animate={{
                scale: [1, 1.15, 1],
                y: [0, -50, 0],
                x: [+50, 0, +50],
              }}
              transition={{
                duration: 22,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
            <div className='primary-circle circle-platform text-original align-center justify-center' >
              <Stack spacing='50px' alignItems='center' justifyContent='center'>
                <Stack spacing='50px' alignItems='center' justifyContent='center'>
                  <div className='column align-center'>
                    <p className='circle-platform-wonho'>WONHO</p>
                    <p className='circle-platform-platform'>PLATFORM</p>
                  </div>
                  <p className='circle-platform-ver'> Ver 1.2.13.8</p> 
                </Stack>
                <p className='circle-platform-updated'>Updated 2022.06.24</p>
              </Stack>
            </div>

        </div>
      </>
    );
  };
  
  export default LoginPage;