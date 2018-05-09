/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-radio/docs/README.md';
import { version } from 'terra-form-radio/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import RadioFieldSrc from '!raw-loader!terra-form-radio/src/RadioField';

// Examples
import DefaultRadioField from './radio_field_examples/DefaultRadioField';
import ControlledRadioField from './radio_field_examples/ControlledRadioField';
import OptionalRadioField from './radio_field_examples/OptionalRadioField';

class RadioFieldExamples extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id="version">Version: {version}</div>
        <Markdown id="readme" src={ReadMe} />
        <h2>Base Example</h2>
        <DefaultRadioField />
        <h2>Other Examples</h2>
        <ControlledRadioField />
        <OptionalRadioField />
      </div>
    );
  }
}

export default RadioFieldExamples;
