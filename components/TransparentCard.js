import Card from "react-bootstrap/Card";

const TransparentCard = props => (
    <Card style={{marginTop: 25, marginBottom: 25}}>
        {props.img && <Card.Img variant="top" src={props.img} style={{height: 250, objectFit: "cover"}}/>}
        <Card.Body>
            {props.title && <Card.Title style={{fontWeight: "bold"}}>{props.title}</Card.Title>}
            {props.children}
        </Card.Body>
        {props.footer && <Card.Footer>
            {props.footer}
        </Card.Footer>}
        <style jsx global>{`
          .card {
            background-color: rgba(245, 245, 245, 0.7) !important;
          }
        `}</style>
    </Card>
);

export default TransparentCard;
