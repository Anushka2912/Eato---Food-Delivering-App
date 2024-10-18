import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <div className="h-screen flex items-center justify-center mainContainer">
            <div className="text-center errorContainer">
                <h2 className="text-3xl font-bold">{err.status}: {err.statusText}</h2>
                <Link to="/"><button className="mt-4 bg-black border border-black rounded-full text-white py-1 px-4 hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300 errBtn global-btn">Go back to homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorComponent;