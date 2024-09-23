import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <div className="errorContainer">
            <h2>{err.status}: {err.statusText}</h2>
            <a href="/"><button className="errBtn global-btn">Go back to homepage</button></a>
        </div>
    );
};

export default ErrorComponent;