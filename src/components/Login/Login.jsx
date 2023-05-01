import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Authcontext } from "../Authprovider/Authprovider";

const Login = () => {
  const { singIn } = useContext(Authcontext);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password)
  .then((result) => {
    const loggedUser = result.user;
    console.log(loggedUser);
    form.reset();
  })
  .catch((error) => {
    console.log(error);
  });

  };

  return (
    <div className="pt-5 mx-auto   w-50">
      <Form onSubmit={handleLogin} className="pt-5 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <div className="text-center mt-2">
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </div>

        <div className="text-center mt-2">
          <div>
            Don't have an account?{" "}
            <Link to="createaccount">Create an account</Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
