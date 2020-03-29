import Card from "react-bootstrap/Card";

const TransparentCard = props => (
    <Card>
        {props.title && <Card.Header style={{fontSize: 32}}>
            {props.title}
        </Card.Header>}
        {props.img && <Card.Img variant="top" src={props.img}/>}
        <Card.Body style={{fontSize: 24}}>
            {props.children}
        </Card.Body>
        <style jsx global>{`
          .card {
            background-color: rgba(245, 245, 245, 0.7) !important;
          }
        `}</style>
    </Card>
);

export default TransparentCard;
