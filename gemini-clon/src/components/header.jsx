import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import "./header.css"

export const Header = () => {
  return (
    <AppBar position="static" color="#FFF" boxShadow="0">
      <Toolbar>
        <Typography flexGrow="1" variant="h6">
          AI Assistant
        </Typography>

        <Avatar />
      </Toolbar>
    </AppBar>
  );
};