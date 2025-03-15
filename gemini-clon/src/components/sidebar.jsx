import { useState } from 'react'
import { NavLink } from "react-router"
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
            width: extended ? 250 : 80,
            flexShrink: 0,
           "& .MuiDrawer-paper": {
                width: extended ? 250 : 80,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRight: "none",
                backgroundColor: "#f0f0f0",
                overflow: "hidden",
                padding: "10px",
                transition: "width 0.15s ease, padding 0.3s ease",
            }
            


        }}
        >
            <List >
                <ListItem button onClick = { () => setExtended(!extended) }>
                    <ListItemIcon>
                        <MenuIcon />
                    </ListItemIcon>
                </ListItem>
                <ListItem component = { NavLink } to="/">
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
                <ListItem component = { NavLink } to="/help">
                    <ListItemIcon>
                        <HelpOutlineIcon />
                    </ListItemIcon>
                    <Fade in={extended}  style={{ transformOrigin: '0 0 0' }}
                        {...(extended ? { timeout: 1000 } : {})}>
                        <ListItemText primary= "Help" />
                    </Fade>
                </ListItem>
                <ListItem  component = { NavLink } to="/history">
                    <ListItemIcon>
                        <HistoryIcon />
                    </ListItemIcon>
                    <Fade in={extended}  style={{ transformOrigin: '0 0 0' }}
                        {...(extended ? { timeout: 1000 } : {})}>
                        <ListItemText primary= "History" />
                    </Fade>
                </ListItem>
                <ListItem component = { NavLink } to="/settings">
                    <ListItemIcon>
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