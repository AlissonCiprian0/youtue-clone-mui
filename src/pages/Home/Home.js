import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Styles
import { HomeStyled } from './style';
import { styled as styledMUI } from '@mui/material/styles';

// Icons
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

// Components styles
const AppBarStyled = styledMUI(AppBar)`
    box-shadow: none;
    z-index: 11000;

    .AppBar-menu {
        margin-right: 6px;
        margin-left: 16px;
    }

    .AppBar-logo {
        height: 25px;
    }

    .AppBar-action {
        margin-left: auto;

        .AppBar-mic {
            margin-right: 6vw;
        }
    }
    .AppBar-login {
        text-transform: uppercase;
        font-weight: 600;
        border-radius: 2px;
    }
`;

const DrawerStyled = styledMUI(Drawer)`
    .MuiDrawer-paper {
        border: 0;

        .MuiListItemIcon-root {
            margin-left: 17%;
            min-width: 45px;
        }

        .MuiListItemButton-root {
            padding: 6px 15px;
        }

        .Mui-selected {
            background-color: rgb(52 52 52 / 20%);

            .MuiListItemIcon-root {
                svg > path {
                    fill: #000;
                }
            }

            .MuiTypography-root {
                font-weight: 700;
            }
        }
    }
`;

const drawerWidth = 240;

const Home = () => {
    return (
        <HomeStyled className='Home'>
            <AppBarStyled position="fixed" color='inherit'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className='AppBar-menu'
                    >
                        <MenuIcon />
                    </IconButton>

                    <img src='/images/logo-preto.png' alt='logo' className='AppBar-logo' />

                    <Box className='AppBar-action'>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className='AppBar-mic'
                        >
                            <KeyboardVoiceIcon />
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <AppsOutlinedIcon />
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MoreVertOutlinedIcon />
                        </IconButton>
                    </Box>

                    <Button
                        color="secondary"
                        variant='outlined'
                        startIcon={<AccountCircleOutlinedIcon />}
                        className='AppBar-login'
                    >
                        Fazer Login
                    </Button>
                </Toolbar>
            </AppBarStyled>

            <DrawerStyled
                variant="permanent"
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
                border='none'
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem disablePadding selected={true}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Início'} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ExploreOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Explorar'} />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SubscriptionsOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Inscrições'} />
                            </ListItemButton>
                        </ListItem>
                    </List>

                    <Divider />
                </Box>
            </DrawerStyled>
        </HomeStyled>
    );
}
 
export default Home;