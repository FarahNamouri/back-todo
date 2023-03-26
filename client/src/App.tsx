import './App.css';
import { FC, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form, InputGroup, Table,} from 'react-bootstrap';
import {
  BsSearch, BsPlus,
} from 'react-icons/bs';
import TableLine from './components/TableLine';
import axios from 'axios';

const App: FC = () => {
  useEffect(() => {
    const url = 'http://localhost:5000/api/tasks/';
    axios.get(url).then((response) => {
      console.log(response.data)
    })
  }, [])
  return (
    <div className="App">
        <Container>
        <Row className="p-3 m-5 bg-light border rounded">
          <Col >
            <h1>To-Do list app</h1>
            <p>🥳Here you will manage your daily tasks.</p>
          </Col>
          <Col >
            <InputGroup className="mb-3">
              <Form.Control placeholder="Search for your task here" />
            </InputGroup>
            <Button variant="success">
              Search
              <BsSearch />
            </Button>
          </Col>
        </Row>

        <Row className="p-3 m-5 bg-light border rounded ">
          <Col >
            <h3 className='fw-bold'>Tasks List</h3>
          </Col>
          <Col>
          
            <Button variant="success">
              Add task
              <BsPlus />
            </Button>
          </Col>
          <Table striped bordered hover className='p-4 m-2'>
            <thead>
              <TableLine />
            </thead>
            <tbody>
            <TableLine />
            <TableLine />
            <TableLine />
            </tbody>
        </Table>
        </Row>
        
       
    </Container>
    </div>
  );
};

export default App;
