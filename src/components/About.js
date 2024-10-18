import TeamClass from "./Team";
const AboutComponent = () => {

    return (
        <div className="h-screen flex items-center justify-center mainContainer">
            <div className="text-center aboutContainer">
                <h2 className="text-3xl font-bold">About Page</h2>
                <TeamClass />
            </div>
        </div>
    );
};

export default AboutComponent;