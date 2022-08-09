import { Col } from "./grid-system-components/Col";
import { Row } from "./grid-system-components/Row";
import { Container } from "./grid-system-components/Container";

function App() {
  return (
    <div className="App">
      <Container style={{ backgroundColor: "blue" }}>
        <Row
          gridGap={20}
          style={{
            backgroundColor: "yellow",
          }}
        >
          <Col lg={3} sm={6} md={6} xs={12} style={{ backgroundColor: "red" }}>
            <h3>Col: lg=3 | sm=6 | md=6 | xs=12</h3>
          </Col>
          <Col lg={3} sm={6} md={6} xs={12} style={{ backgroundColor: "red" }}>
            <h3>Col: lg=3 | sm=6 | md=6 | xs=12</h3>
          </Col>
          <Col lg={3} sm={6} md={6} xs={12} style={{ backgroundColor: "red" }}>
            <h3>Col: lg=3 | sm=6 | md=6 | xs=12</h3>
          </Col>
          <Col lg={3} sm={6} md={6} xs={12} style={{ backgroundColor: "red" }}>
            <h3>Col: lg=3 | sm=6 | md=6 | xs=12</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
