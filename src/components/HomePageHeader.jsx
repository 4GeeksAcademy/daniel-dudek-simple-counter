import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HomePageHeader = ({ currentPage, pageSetter }) => {
  const linkMap = ["Home", "Counter"];

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand
            onClick={() => pageSetter("Home")}
            style={{ cursor: "pointer" }}
          >
            <img
              alt=""
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="me-auto">
              {linkMap.map((link) => {
                return (
                  <Nav.Link
                    active={link === currentPage}
                    onClick={() => pageSetter(link)}
                  >
                    {link}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HomePageHeader;
