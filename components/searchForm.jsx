import styled from 'styled-components'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { disabled: true }
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e) {
    this.setState({ disabled: e.target.value.length === 0 })
  }

  render() {
    return(
      <Form onSubmit={ this.props.onSubmit }>
        <TextInput type="text" name="query" placeholder="Search..." onKeyUp={ this.handleKeyUp }></TextInput>
        <SubmitButton type="submit" disabled={ this.state.disabled }>Search</SubmitButton>
      </Form>
    )
  }
}

const Form = styled.form`
  background-color: #f6f8fa;
  padding: 16px;
  display: flex;
`
const TextInput = styled.input`
  border: 1px solid #999;
  color: #333;
  height: 36px;
  min-width: 240px;
  padding: 0 12px;
  outline: none;
  &:focus {
    border-color: #1074e7;
    outline: none;
  }
  @media (max-width: 460px) {
    flex-grow: 1;
    min-width: 120px;
  }
  `
const SubmitButton = styled.button`
  background-color: #1074e7;
  border: 1px solid #1074e7;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  height: 36px;
  margin-left: 12px;
  padding: 0 24px;

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
`

export default SearchForm;