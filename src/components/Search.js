import React from 'react'
import { Form, FormControl, InputGroup, Button, Spinner } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'

class Search extends React.Component {

  render() {
    return (
      <Form>
        <InputGroup>
          <FormControl type="text" placeholder="search videos"/>
          <InputGroup.Append>
            <Button className="py-0" variant="outline-light">
    <MaterialIcon icon="search" size="small" invert preloader={<Spinner animation="border" variant="light" size="sm" as="span"/>}/>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    )
  }
}

export default Search