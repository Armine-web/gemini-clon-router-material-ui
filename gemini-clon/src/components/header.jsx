import { AppBar , Toolbar, Typography, Avatar } from "@mui/material"

export const Header = () => {
    return (
        <>
            <AppBar position = "statik" >
                <Toolbar>
                    <Typography variant = "h6" flexGrow = "2">AI Assistant</Typography>
                    <Avatar />
                </Toolbar>

            </AppBar>
        </>
    )
}