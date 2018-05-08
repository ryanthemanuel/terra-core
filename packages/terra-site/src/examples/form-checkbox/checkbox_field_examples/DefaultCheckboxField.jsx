import React from 'react';

import Checkbox from 'terra-form-checkbox/lib/Checkbox';
import CheckboxField from 'terra-form-checkbox/lib/CheckboxField';

const disabledCheckbox = () => (
  <CheckboxField
    legend="Pick a Selection"
    help="You need this"
    isInvalid
    error="An answer must be chosen"
  >
    <Checkbox id="choice-one" labelText="Choice One" />
    <Checkbox id="choice-two" labelText="Choice Two" />
  </CheckboxField>
);

export default disabledCheckbox;
