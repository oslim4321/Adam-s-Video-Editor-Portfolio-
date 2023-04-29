import { Accordion, Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const FAQ = () => {
  return (
    // <div className="flex flex-col gap-y-4">
    //   <div>
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          TAB 1
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body>This is first tab body</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          TAB 2
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="1">
          <Card.Body>This is second tab body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    //   </div>
    // </div>
  );
};

export default FAQ;
