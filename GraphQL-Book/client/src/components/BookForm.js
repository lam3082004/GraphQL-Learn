import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useQuery, useMutation } from "@apollo/client";
import { getAuthors, getBooks } from "../graphql-client/queries";
import { addSingleBook } from "../graphql-client/mutations";

const BookForm = () => {
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const { name, genre, authorId } = newBook;

  const onInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("test deploy");
    addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: getBooks }],
    });

    setNewBook({ name: "", genre: "", authorId: "" });
  };

  // GraphQL operations
  const { loading, data } = useQuery(getAuthors);

  const [addBook] = useMutation(addSingleBook);

  // console.log(dataMutation)

  return (
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Book name" name='name' onChange={onInputChange} value={name}/>
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Book genre" name='genre' onChange={onInputChange} value={genre}/>
    </Form.Group>
    <Form.Group className="mb-3">
        {loading ? (
            <p>loading author</p>
        ) : (
            <Form.Control as="select" name="authorId" onChange={onInputChange} value={authorId}>
                <option disabled value="">Select Author</option>
                {data.authors.map((author) => (
                    <option key={author.id} value={author.id}>
                        {author.name}
                    </option>
                ))}
            </Form.Control>
        )}
    </Form.Group>

    <Form.Group className="text-end">
        <Button className="" variant="info" type="submit">
            Add Book
        </Button>
    </Form.Group>
</Form>
  );
};

export default BookForm;
