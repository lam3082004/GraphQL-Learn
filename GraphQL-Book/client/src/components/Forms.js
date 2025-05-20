import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

import BookForm from './BookForm'
import AuthorForm from './AuthorForm'


const Forms = () => {


    return (
        <>
            <Row>
                <Col>
                    <BookForm />
                </Col>

                <Col>
                    <AuthorForm />
                    {/* <Form>
                        <Form.Group className="invisible">
                            <Form.Control />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Author name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="number" placeholder="Author age" />
                        </Form.Group>

                        <Form.Group className="text-end">
                            <Button className="" variant="info" type="submit">
                                Add Author
                            </Button>
                        </Form.Group>
                    </Form> */}
                </Col>
            </Row>
        </>
    );
};

export default Forms;
