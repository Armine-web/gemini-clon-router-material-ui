import { Outlet } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Header } from "../../components/header";

export const Navigation = () => {
    return (
        <>
            <CssBaseline />
                <div>
                    {/* {SideBar} */}
                    <Box>
                        <Header />
                        <Outlet />
                    </Box>
                
                </div>
        </>
    )
}