import NavBar from '../components/NavBar';
import Jumbotron from "react-bootstrap/Jumbotron";

const Parochie = () => (
    <div>
        <NavBar/>
        <Jumbotron className="text-center">
            <h1>De Parochie</h1>
            <p>
                Bestaat 150 jaar.
            </p>
        </Jumbotron>
    </div>
);

export default Parochie;
