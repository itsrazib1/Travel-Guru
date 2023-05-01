import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="pt-5 mx-auto   w-50">
      <Form className="pt-5 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
<div className="text-center mt-2">
<Button  variant="warning" type="submit">
          Submit
        </Button>
</div>
        
        <div className="text-center mt-2">
          <div>Don't have an account? <Link to='crateaccount'>Create an account</Link></div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
