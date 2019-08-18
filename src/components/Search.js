import React from 'react'
import { Form, FormControl, InputGroup, Button, Spinner } from 'react-bootstrap'
import MaterialIcon from 'material-icons-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
  fetchResults as fetchResultsAction,
  setTerms as setTermsAction 
} from './../store/actions'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    this.changeTerms = this.changeTerms.bind(this)
  }

  search(event){
    event.preventDefault()
    this.props.fetchResults(
      this.props.terms
    )
  }

  changeTerms(event){
    this.props.setTerms(
      event.target.value
    )
  }

  render() {
    return (
      <Form onSubmit={this.search}>
        <InputGroup>
          <FormControl type="text" placeholder="search videos" value={this.props.terms} onChange={this.changeTerms}/>
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

const mapStateToProps = (state) => ({
  terms: state.searchTerms
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchResults: fetchResultsAction,
  setTerms: setTermsAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)