import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
function Material() {
  return (
    <div>
      <h3>Material-UI, the world's most popular React UI framework.</h3>
      <p>Lets try it</p>

      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <Container maxWidth="sm">Container</Container>
    </div>
  );
}

export default Material;
