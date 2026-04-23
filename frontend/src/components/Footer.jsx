import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {currentYear} My Shop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
