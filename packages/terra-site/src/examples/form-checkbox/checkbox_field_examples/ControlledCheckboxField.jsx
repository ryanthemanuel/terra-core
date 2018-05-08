import React from 'react';

import Checkbox from 'terra-form-checkbox/lib/Checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswers: []
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const { selectedAnswers } = this.state;

    if (e.currentTarget.checked) {
      selectedAnswers.push(e.currentTarget.value);
    } else {
      selectedAnswers.splice(selectedAnswers.indexOf(e.currentTarget.value), 1);
    }

    this.setState({selectedAnswers});
  }

  render() {
    return (
      <CheckboxField
        legend="Pick a Selection"
        help="You need this"
        isInvalid={this.state.selectedAnswers.length <= 0}
        error="An answer must be chosen"
      >
        <Checkbox id="new-one" labelText="Choice One" onChange={this.handleOnChange} value="choice_one" />
        <Checkbox id="new-two" labelText="Choice Two" onChange={this.handleOnChange} value="choice_two" />
      </CheckboxField>
    );
  }
};
