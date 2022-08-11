import { Col, Container, Row } from "./grid-system-components";

function App() {
  return (
    <div className="App">
      <Container fluid style={{ backgroundColor: "blue" }}>
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
