
import Creation from "./pages/Creation";
import Home from "./pages/Home";
import { CREATE_ROUTE, HOME_ROUTE } from "./utils/consts";

export const RoutesArr  = [
    {
        path: HOME_ROUTE,
        Component: <Home/>
    },
    {
        path: CREATE_ROUTE,
        Component: <Creation/>
    }
]