import { useState } from 'react'
import { Fade, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import HistoryIcon from '@mui/icons-material/History'
import SettingsIcon from '@mui/icons-material/Settings'
import AddIcon from '@mui/icons-material/Add';

export const SideBar = () => {
    const [extended, setExtended] = useState(false);
    return (
        <>
        <Drawer  
        variant="permanent"
        sx = {{
           "& .MuiDrawer-paper": {
            width: extended ? 250 : 80,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
                borderRight: "none",
                backgroundColor: "#f0f0f0",
                overflow: "hidden",
                padding: "10px"
            }
            


        }}
        >
            <List>
                <ListItem button onClick = { () => setExtended(!extended) }>
                    <ListItemIcon>
                        <MenuIcon />
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <Fade in={extended}  style={{ transformOrigin: '0 0 0' }}
                    {...(extended ? { timeout: 1000 } : {})}>
                       <ListItemText primary = "New Chat" /> 
                    </Fade>
                </ListItem>
            </List>

            <Divider />

            <List>
                <ListItem button>
                    <ListItemIcon>
                        <HelpOutlineIcon />
                    </ListItemIcon>
                    <Fade in={extended}  style={{ transformOrigin: '0 0 0' }}
                        {...(extended ? { timeout: 1000 } : {})}>
                        <ListItemText primary= "Help" />
                    </Fade>
                </ListItem>
                <ListItem>
                    <ListItemIcon button>
                        <HistoryIcon />
                    </ListItemIcon>
                    <Fade in={extended}  style={{ transformOrigin: '0 0 0' }}
                        {...(extended ? { timeout: 1000 } : {})}>
                        <ListItemText primary= "History" />
                    </Fade>
                </ListItem>
                <ListItem>
                    <ListItemIcon button>
                        <SettingsIcon />
                    </ListItemIcon>
                    <Fade in={extended}  style={{ transformOrigin: '0 0 0' }}
                        {...(extended ? { timeout: 1000 } : {})}>
                        <ListItemText primary="Settings" />
                    </Fade>
                </ListItem>
               
            </List>
        </Drawer>
        </>
    )
}