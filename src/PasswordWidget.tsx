import React from 'react';
import { WidgetProps } from '@rjsf/core';
import TextWidget from './TextWidget';

export default function PasswordWidget({ options, ...props }: WidgetProps) {
  // eslint-disable-next-line
  options.inputType = 'password';
  return <TextWidget {...props} options={options} />;
}
