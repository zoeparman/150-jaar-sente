import Card from "react-bootstrap/Card";

const TransparentCard = props => (
    <Card>
        <Card.Header style={{fontSize: 32}}>
            {props.title}
        </Card.Header>
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
