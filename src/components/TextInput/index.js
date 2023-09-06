import {Component} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  InputContainer,
  Paragraph,
  Input,
  Button,
} from './styledComponent'

class TextInput extends Component {
  state = {userInput: '', isButtonClicked: true}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {userInput, isButtonClicked} = this.state
    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <Input
                type="text"
                onChange={this.onChangeInput}
                value={userInput}
              />
            ) : (
              <Paragraph>{userInput}</Paragraph>
            )}
            {isButtonClicked ? (
              <Button onClick={this.onClickButton}>Save</Button>
            ) : (
              <Button onClick={this.onClickButton}>Edit</Button>
            )}
          </InputContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}
export default TextInput
