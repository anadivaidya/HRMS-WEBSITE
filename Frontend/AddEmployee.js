import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    role: '',
    department: '',
    id: '',
    type: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', employee);
    // Submit to API or perform validation here
  };

  return (
    <Container className="my-4">
      <h4 className="mb-3">Add New Employee</h4>

      <Alert variant="light" className="border">
        <strong>Preparing a CSV file?</strong> <br />
        Great news! If you have already generated a CSV file in the{' '}
        <a href="/">recommended format</a>, you can take advantage of our bulk import feature!
        <Button variant="primary" size="sm" className="float-end mt-2">
          <i className="bi bi-upload"></i> Import List
        </Button>
      </Alert>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="employeeName">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
                placeholder="Enter employee name"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={employee.phone}
                onChange={handleChange}
                placeholder="+91 123 456 7890"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Select name="role" value={employee.role} onChange={handleChange}>
                <option value="">Select role</option>
                <option>Chartered Accountant</option>
                <option>Developer</option>
                <option>HR Manager</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={employee.email}
                onChange={handleChange}
                placeholder="example@email.com"
              />
              <Form.Text className="text-muted">
                *The above email address will be used to send invite to the said employee
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="department">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                name="department"
                value={employee.department}
                onChange={handleChange}
                placeholder="e.g., Technical Support"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="employeeId">
              <Form.Label>ID of Employee</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={employee.id}
                onChange={handleChange}
                placeholder="ID number"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Form.Group controlId="type">
              <Form.Label>Type: Part-time/Full-time</Form.Label>
              <Form.Select name="type" value={employee.type} onChange={handleChange}>
                <option value="">Select Type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Save Employee Details
        </Button>
      </Form>
    </Container>
  );
};

export default AddEmployee;