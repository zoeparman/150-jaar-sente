import knooppunten from "./wandeling/knooppunten";
import Link from "next/link";
import NavBar from '../components/NavBar';
import Jumbotron from "react-bootstrap/Jumbotron";

const Wandeling = () => (
    <div>
        <NavBar/>
        <Jumbotron className="text-center">
            <h1>Wandeling</h1>
            <p>
                We doen een wandeling.
            </p>
        </Jumbotron>
        {knooppunten.map((loop, _) => {
            return (
                <div>
                    <h1>{loop.name}</h1>
                    <ul>
                        {loop.nodes.map((node, _) => {
                            return (
                                <li>
                                    <Link href={node.location}>
                                        <a>{node.name}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        })}
    </div>
);

export default Wandeling;
