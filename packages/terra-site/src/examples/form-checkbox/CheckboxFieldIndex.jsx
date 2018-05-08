/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-form-checkbox/docs/README.md';
import { version } from 'terra-form-checkbox/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CheckboxFieldSrc from '!raw-loader!terra-form-checkbox/src/CheckboxField';

// Examples
import DefaultCheckboxField from './checkbox_field_examples/DefaultCheckboxField';
import ControlledCheckboxField from './checkbox_field_examples/ControlledCheckboxField';

class CheckboxExamples extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id="version">Version: {version}</div>
        <Markdown id="readme" src={ReadMe} />
        <PropsTable id="props" src={CheckboxFieldSrc} />
        <DefaultCheckboxField />
        <h2 id="longtext">Controlled CheckboxField Example</h2>
        <ControlledCheckboxField />
      </div>
    );
  }
  }

export default CheckboxExamples;
