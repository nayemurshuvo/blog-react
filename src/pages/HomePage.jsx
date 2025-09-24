import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <p>This is HomePage.</p>
            <Link to="/me">Go to Profile Page</Link>
        </div>
    );
};

export default HomePage;