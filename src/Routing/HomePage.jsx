import Header from "./Header";
import Home from "../Home";

function HomePage() {
    return (
        <div className="Home">

            <Header />
            <h1 className="Home-header"></h1>
            <Home />
        </div>
    );
}

export default HomePage;