import { createBrowserRouter } from "react-router-dom";

import { ROUTE_PATHS } from "./routePaths";
import PageContainer from "./PageContainer";
import Login from "./home/Home";

const routes = createBrowserRouter([
  {
    path: "",
    element: <PageContainer />,
    children: [{ path: ROUTE_PATHS.HOME, element: <Login /> }],
  },
]);

export default routes;
