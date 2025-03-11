import { createBrowserRouter } from "react-router";
import { Navigation } from "../layouts/navigation/navigation";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Navigation />,
        children: [
            {
                index: true,
                element: <div>Chat</div>,
            },
            {
                path: "help",
                element: <div>Help</div>,
            },
            {
                path: "setings",
                element: <div>Settings</div>,
            },
            {
                path: "*",
                element: <div>404</div>,
            }
        ]
    },
    
    
]);