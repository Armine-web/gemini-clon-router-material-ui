import { createBrowserRouter } from "react-router";

import { Navigation } from "../layouts/navigation/navigation";

import { Settings } from "../pages/settings";
import { Chat } from "../pages/chat";
import { NotFoundPage } from "../pages/404";

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
                path: "history",
                element: <History/>,
            },
            {
                path: "help",
                element: <Chat />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            }
        ]
    },
    
    
]);