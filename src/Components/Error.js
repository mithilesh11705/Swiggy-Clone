import { useRouteError } from "react-router-dom";


const Error=()=>
{

    const err=useRouteError();

    return(
        <div className="error">
            <h1>404</h1>
            <h2>Page not found</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    );
}

export default Error;