import * as React from 'react';
import GNB_Left from '../layout/GNB_Left';
import Top from '../layout/Top';

import { Box, 
        Stack,
        Divider, 
        Button ,
        Select,
        InputLabel,
        FormControl,
        MenuItem,
        TextField,
        Input,
        
        } from "@mui/material";
import { FirstPage, 

        } from "@mui/icons-material";

function EquipmentData () {
    const [select_all, setselect_all] = React.useState('');
    const selectAllChange = (event) => {
        setselect_all(event.target.value);
    };

    const [select_logList, setselect_logList] = React.useState('');
    const selectLogListChange = (event) => {
        setselect_logList(event.target.value);
    };

    const [select_date, setselect_date] = React.useState('');
    const selectDateChange = (event) => {
        setselect_date(event.target.value);
    };

    return (
      <>
        <div className='flex-grow bg-layout'>
            <div className='left-area'>
                <GNB_Left/>            
            </div>
            <div className='right-area'>
                <Top/>
                <Box className='container'>
                  <Stack className='section' spacing='40px'>
                    <Stack spacing='40px' className='section-top'>
                      <Stack className='section-top-btnArea flex' direction='row' spacing='10px'>
                        <Box width='200px'>
                          <FormControl fullWidth size="small">
                            <InputLabel id="select-all">All</InputLabel>
                            <Select
                            MenuProps={{
                                className: "select-items",
                            }}
                            labelId="select-all"
                            id="select-all-select"
                            value={select_all}
                            label="All"
                            onChange={selectAllChange}
                            >
                            <MenuItem value={1}>All</MenuItem>
                            <MenuItem value={2}>All</MenuItem>
                            <MenuItem value={3}>All</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <Button variant='contained' disableElevation>
                          Search
                        </Button>
                      </Stack>
                      <Divider fullWidth />
                    </Stack>
                    <Stack className='section-article' spacing='40px'>
                      <Stack spacing='10px'>
                        <Box width='400px'>
                          <FormControl fullWidth size="small">
                            <InputLabel id="select-logList">Log List</InputLabel>
                            <Select
                            MenuProps={{
                                className: "select-items",
                            }}
                            labelId="select-logList"
                            id="select-logList-select"
                            value={select_logList}
                            label="Log List"
                            onChange={selectLogListChange}
                            >
                            <MenuItem value={1}>Log List</MenuItem>
                            <MenuItem value={2}>Log List</MenuItem>
                            <MenuItem value={3}>Log List</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                        <Stack spacing='20px' direction='row' alignItems='center'>
                          <p className='font-medium-b'>Item Type</p>
                          <p className='font-small text-40p'>count : 429</p>
                        </Stack>
                        <div className='flex-grow justify-space'>
                          <Stack direction='row' spacing='10px'>
                            <Button disableElevation variant='contained'> Vendor Assign</Button>
                            <Button disableElevation variant='contained'> invite</Button>
                            <Button disableElevation variant='contained' color='black'> Modify</Button>
                            <Button disableElevation variant='contained' color='black'> Delete</Button>
                            <Button disableElevation variant='contained' color='black'> Save</Button>
                          </Stack>
                          <Stack direction='row' spacing='10px'>
                            <Box width='200px'>
                              <FormControl fullWidth size="small">
                                <InputLabel id="select-date">2022-06-24</InputLabel>
                                <Select
                                MenuProps={{
                                    className: "select-items",
                                }}
                                labelId="select-date"
                                id="select-date-select"
                                value={select_date}
                                label="2022-06-24"
                                onChange={selectDateChange}
                                >
                                <MenuItem value={1}>2022-06-24</MenuItem>
                                <MenuItem value={2}>2022-06-24</MenuItem>
                                <MenuItem value={3}>2022-06-24</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                            <Button disableElevation variant='contained'> From Eap</Button>
                            <Button disableElevation variant='outlined'> Import (excel)</Button>
                            <Button disableElevation variant='outlined'> Export (Excel)</Button>
                            <Button disableElevation variant='contained'> Send to EAP</Button>
                          </Stack>
                        </div>
                        <div className='table-area font-medium-b'>
                          TABLE AREA
                        </div>
                      </Stack>
                      <Stack spacing='10px'>
                       <Stack spacing='20px' direction='row' alignItems='center'>
                          <p className='font-medium-b'>Item Type</p>
                          <p className='font-small text-40p'>count : 429</p>
                        </Stack>
                        <div className='flex justify-space'>
                          <Stack spacing='10px' direction='row' alignItems='center'>
                            <Box width='200px'>
                              <TextField type='number' size='small' fullWidth />
                            </Box>
                            <p className='font-small text-40p'> Creating Tag Count </p>
                            <Button disableElevation variant='contained' color='black'> Add </Button>
                            <Button disableElevation variant='outlined' size=''> Import (Excel) </Button>
                            <Button disableElevation variant='outlined' > Export (Excel) </Button>
                          </Stack>
                          <Stack spacing='10px' direction='row' alignItems='center'>
                            <Button disableElevation variant='contained' color='black'> Delete </Button> 
                            <Button disableElevation variant='contained' color='black'> Save </Button>  
                          </Stack>
                        </div>
                        <div className='table-area font-medium-b'>
                          TABLE AREA
                        </div>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
            </div>
        </div>
      </>
    );
  };
  
  export default EquipmentData;