import './App.css';
import { Form, FormGroup } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [validated, setValidated] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleChange = (e) => {
    setValidated(e.currentTarget.value);
    if (e.currentTarget.value.includes('test')) {
      e.currentTarget.setCustomValidity('')
    } else {
      e.currentTarget.setCustomValidity('Field must contain \'test\'');
    }
  }

  return (
    <div className="App">
      <h1>Simple HTML validation example</h1>
      <div className='md4'>
        <Form onSubmit={handleSubmit}>
          <FormGroup >
            <Form.Label>Test custom input must contain test</Form.Label>
            <Form.Control required name="test" onChange={handleChange} value={validated} />
          </FormGroup>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
}

export default App;
