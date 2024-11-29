import { useState } from "react";
import { Container, Button, Badge } from "react-bootstrap";

export const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);

  return (
    <>
      <Container className="d-flex flex-column align-items-center my-4">
        <Badge
          pill
          bg="dark"
          className="p-4 text-white mb-3"
          style={{ fontSize: "50px" }}
        >
          {seconds.toString()}
        </Badge>
        <div className="d-flex justify-content-center">
          <Button
            variant="success"
            onClick={() => setSeconds(seconds + 1)}
            className="mx-2"
          >
            +1
          </Button>
          <Button
            variant="danger"
            onClick={() => setSeconds(seconds - 1)}
            className="mx-2"
          >
            -1
          </Button>
        </div>
      </Container>
    </>
  );
};
