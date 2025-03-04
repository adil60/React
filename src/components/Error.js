import { useRouteError,Link} from "react-router-dom"


const Error = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <div> 
            <h1>Page    not found</h1>
            <h3>{err.status} : {err.statusText}</h3>
            <button><Link to="/">Go Home</Link></button>
        </div>
    )
}

export default Error
