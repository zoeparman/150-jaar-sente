import knooppunten from "./wandeling/knooppunten";
import Link from "next/link";
import NavBar from '../components/NavBar'

const Wandeling = () => (
    <div>
        <NavBar/>
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
