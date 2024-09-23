import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <div className="mainContainer">
            <div className="errorContainer">
                <h2>{err.status}: {err.statusText}</h2>
                <Link to="/"><button className="errBtn global-btn">Go back to homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorComponent;