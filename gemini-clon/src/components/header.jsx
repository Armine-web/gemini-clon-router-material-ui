import { AppBar , Toolbar, Typography, Avatar } from "@mui/material"

export const Header = () => {
    return (
        <>
            <AppBar position="static" color="#FFF" boxShadow="none">
                <Toolbar>
                    <Typography variant = "h6" flexGrow = "1">AI Assistant</Typography>
                    <Avatar />
                </Toolbar>

            </AppBar>
        </>
    )
}