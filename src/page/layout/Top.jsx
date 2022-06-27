import * as React from 'react';
import { Box, 
        Divider, 
        Button ,
        InputLabel,
        FormControl,
        MenuItem,
        Select,
        Stack,
        Menu,
        
        } from "@mui/material";

import { FirstPage, 
        Person,
        Notifications,
        Chat,
        AccountCircle,

        } from "@mui/icons-material";

function Top () {
    const [topSubject, setTopSubject] = React.useState('');
    const topSubjectChange = (event) => {
        setTopSubject(event.target.value);
    };

    const [topSubject2, setTopSubject2] = React.useState('');
    const topSubjectChange2 = (event) => {
        setTopSubject2(event.target.value);
    };

    const [personEl, setPersonEl] = React.useState(null);
    const open = Boolean(personEl);
    const PersonClick = (event) => {
        setPersonEl(event.currentTarget);
    };
    const PersonClose = () => {
        setPersonEl(null);
    };

    const [NotificationEl, setNotificationEl] = React.useState(null);
    const openNotification = Boolean(NotificationEl);
    const NotificationClick = (event) => {
        setNotificationEl(event.currentTarget);
    };
    const NotificationClose = () => {
        setNotificationEl(null);
    };
    return (
      <>
        <div className="top bg-original">
            <Box>
                <p className="font-title flex-grow"> Title </p>
            </Box>
            <Stack direction="row" spacing='10px' alignItems='center'>
                <Box width='300px'>
                    <FormControl fullWidth size="small">
                        <InputLabel id="top-subject">SO2542 Carbon Black &amp; Delayed...</InputLabel>
                        <Select
                        MenuProps={{
                            className: "select-items",
                        }}
                        labelId="top-subject"
                        id="top-subject-select"
                        value={topSubject}
                        label="SO2542 Carbon Black &amp; Delayed..."
                        onChange={topSubjectChange}
                        >
                        <MenuItem value={1}>SO2542 Carbon Black &amp; Delayed...</MenuItem>
                        <MenuItem value={2}>SO2542 Carbon Black &amp; Delayed...</MenuItem>
                        <MenuItem value={3}>SO2542 Carbon Black &amp; Delayed...</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box width='200px'>
                    <FormControl fullWidth size="small">
                        <InputLabel id="top-subject2">LV SWGR/MCC</InputLabel>
                        <Select
                        labelId="top-subject2"
                        id="top-subject2-select"
                        value={topSubject}
                        label="LV SWGR/MCC"
                        onChange={topSubjectChange2}
                        >
                        <MenuItem value={1}>LV SWGR/MCC</MenuItem>
                        <MenuItem value={2}>LV SWGR/MCC</MenuItem>
                        <MenuItem value={3}>LV SWGR/MCC</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Button className='top-icon'
                        id="Person-button"
                        aria-controls={open ? 'Person-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={PersonClick}
                        >
                    <Person />
                </Button>
                <Menu 
                    id="Person-menu"
                    anchorEl={personEl}
                    open={open}
                    onClose={PersonClose}
                    MenuListProps={{
                    'aria-labelledby': 'Person-button',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                >
                    <div className='top-menuItem'>
                        <Box className='flex align-center '>
                            <Stack direction='row' spacing='10px' alignItems='center'>
                                <Button onClick={PersonClose} className='top-icon'>
                                    <AccountCircle/>
                                </Button>
                                <Button onClick={PersonClose} className='person-button'>
                                    <p className='font-input-medium-b'>SECL</p>
                                    <p className='font-pagination text-40p'>Yoon Gi Kim</p>
                                </Button>
                            </Stack>
                            <Button onClick={PersonClose} className='top-icon'>
                                <Chat />
                            </Button>
                        </Box>
                        <Box className='flex align-center '>
                            <Stack direction='row' spacing='10px' alignItems='center'>
                                <Button onClick={PersonClose} className='top-icon'>
                                    <AccountCircle/>
                                </Button>
                                <Button onClick={PersonClose} className='person-button'>
                                    <p className='font-input-medium-b'>SECL</p>
                                    <p className='font-pagination text-40p'>Yoon Gi Kim</p>
                                </Button>
                            </Stack>
                            <Button onClick={PersonClose} className='top-icon'>
                                <Chat />
                            </Button>
                        </Box>
                        <Box className='flex align-center '>
                            <Stack direction='row' spacing='10px' alignItems='center'>
                                <Button onClick={PersonClose} className='top-icon'>
                                    <AccountCircle/>
                                </Button>
                                <Button onClick={PersonClose} className='person-button'>
                                    <p className='font-input-medium-b'>SECL</p>
                                    <p className='font-pagination text-40p'>Yoon Gi Kim</p>
                                </Button>
                            </Stack>
                            <Button onClick={PersonClose} className='top-icon'>
                                <Chat />
                            </Button>
                        </Box>
                        <Box className='flex align-center '>
                            <Stack direction='row' spacing='10px' alignItems='center'>
                                <Button onClick={PersonClose} className='top-icon'>
                                    <AccountCircle/>
                                </Button>
                                <Button onClick={PersonClose} className='person-button'>
                                    <p className='font-input-medium-b'>SECL</p>
                                    <p className='font-pagination text-40p'>Yoon Gi Kim</p>
                                </Button>
                            </Stack>
                            <Button onClick={PersonClose} className='top-icon'>
                                <Chat />
                            </Button>
                        </Box>
                        <Box className='flex align-center '>
                            <Stack direction='row' spacing='10px' alignItems='center'>
                                <Button onClick={PersonClose} className='top-icon'>
                                    <AccountCircle/>
                                </Button>
                                <Button onClick={PersonClose} className='person-button'>
                                    <p className='font-input-medium-b'>SECL</p>
                                    <p className='font-pagination text-40p'>Yoon Gi Kim</p>
                                </Button>
                            </Stack>
                            <Button onClick={PersonClose} className='top-icon'>
                                <Chat />
                            </Button>
                        </Box>
                        <Box className='flex align-center '>
                            <Stack direction='row' spacing='10px' alignItems='center'>
                                <Button onClick={PersonClose} className='top-icon'>
                                    <AccountCircle/>
                                </Button>
                                <Button onClick={PersonClose} className='person-button'>
                                    <p className='font-input-medium-b'>SECL</p>
                                    <p className='font-pagination text-40p'>Yoon Gi Kim</p>
                                </Button>
                            </Stack>
                            <Button onClick={PersonClose} className='top-icon'>
                                <Chat />
                            </Button>
                        </Box>
                    </div>
                        
                    <Divider />

                    <MenuItem onClick={PersonClose}><p className='text-60p'>My account</p></MenuItem>
                    <MenuItem onClick={PersonClose}><p className='text-60p'>Logout</p></MenuItem>
                </Menu>
                <Button className='top-icon'
                    id="Notification-button"
                    aria-controls={openNotification ? 'Notification-Menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openNotification ? 'true' : undefined}
                    onClick={NotificationClick}
                >
                    <Notifications />
                </Button>
                <Menu 
                    id="Notification-menu"
                    anchorEl={NotificationEl}
                    open={openNotification}
                    onClose={NotificationClose}
                    MenuListProps={{
                    'aria-labelledby': 'Notification-button',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                >
                    <div className='top-notificationItem font-medium-b text-87p'>
                      Notifications
                    </div>
                        
                    <Divider />

                    <div className='top-notification'>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='primary-font'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='primary-font'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='primary-font'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='primary-font'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='text-40p'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='text-40p'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='text-40p'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='text-40p'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='text-40p'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='text-40p'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='text-40p'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={PersonClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='text-40p'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='text-40p'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={NotificationClose} className='notification-item'>
                            <div className='flex justify-space align-center flex-grow'>
                                <p className='text-87p flex-grow'>[Initiate] LV SWGR / MCC</p>
                                <p className='text-40p font-small flex align-center'> 2022.06.24 
                                    <span className='text-40p'> &nbsp; ●</span>
                                </p>
                            </div>
                        </MenuItem>
                    </div>
                </Menu>
            </Stack>
        </div>
      </>
    );
  };
  
  export default Top;