import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history = useNavigate();
  let location = useLocation();
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history(`/?keyword=${keyword}`);
    } else {
      history(history(location.pathname));
    }
  };
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>

      <Button type="submit" variant="outline-success" className="p-2">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
