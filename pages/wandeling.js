import knooppunten from "./wandeling/knooppunten";
import Link from "next/link";
import Jumbotron from "react-bootstrap/Jumbotron";
import Layout from '../components/Layout';

const Wandeling = () => (
    <Layout>
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
                                    <Link href={`/wandeling/${node.location}`}>
                                        <a>{node.name}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        })}
    </Layout>
);

export default Wandeling;
