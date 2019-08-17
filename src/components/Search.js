import React from 'react'
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap'

class Search extends React.Component {

  render() {
    return (
      <Form>
        <InputGroup>
          <FormControl type="text" placeholder="Search"/>
          <InputGroup.Append>
            <Button >Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    )
  }
}

export default Search