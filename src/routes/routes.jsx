import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import PaginaInicial from "../pages/PaginaInicial"
import PaginaCadastro from "../pages/PaginaCadastro"
import PaginaLocais from "../pages/PaginaLocais"


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <PaginaInicial />
            },
            {
                path: "/cadastro",
                element: <PaginaCadastro />
            },
            {
                path: "/editar/:id",
                element: <PaginaCadastro />
            },
            {
                path: "/locais",
                element: <PaginaLocais />
            }
        ]
    }
])

export default routes;